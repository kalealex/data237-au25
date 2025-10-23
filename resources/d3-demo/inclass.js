// margin convention
const svgWidth = 600,
    svgHeight = 560,
    margin = { top: 30, right: 30, bottom: 60, left: 60 },
    width = svgWidth - margin.left - margin.right,
    height = svgHeight - margin.top - margin.bottom;

// svgs
let scatterSvg = d3.select("#scatterplot-container").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
let scatterGroup = scatterSvg.append("g") 
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let barSvg = d3.select("#bar-container").append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
let barGroup = barSvg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
let barGroupOverlay = barSvg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let brush = d3.brush()
    .on("start brush end", brushFxn);

let scatterData,
    filteredBarData,
    points,
    xScaleScatter,
    yScaleScatter,
    xScaleBar,
    yScaleBar,
    brushRange,
    selectedCyl = [];

d3.csv("cars.csv")
    .then(function (data) {
        console.log(data);

        // although we don't need to do this yet, we'll make separate copies of the data for each plot
        // we will want this when we add interactivity, so we can filter the data in each plot without losing the original data object
        scatterData = deepCopy(data);

        // cast strings as numbers
        for (let i = 0; i < scatterData.length; i++) { 
            scatterData[i].hp = +scatterData[i].hp;
            scatterData[i].mpg = +scatterData[i].mpg;
        }

        
        // scatterplot:
        // create scales
        xScaleScatter = d3.scaleLinear()
            .domain(d3.extent(scatterData, (d) => d.hp))
            .range([0, width]); 
        yScaleScatter = d3.scaleLinear()
            .domain(d3.extent(scatterData, (d) => d.mpg))
            .range([height, 0]);

        // create our axes
        let xAxisScatter = scatterSvg.append("g") 
            .attr("class", "axis")
            .attr("transform", `translate(${margin.left}, ${margin.top + height})`) 
            .call(d3.axisBottom(xScaleScatter));
        let yAxisScatter = scatterSvg.append("g")
            .attr("class", "axis")
            .attr("transform", `translate(${margin.left}, ${margin.top})`) 
            .call(d3.axisLeft(yScaleScatter));

        // label our axes
        xAxisScatter.append("text")
            .attr("class", "label")
            .attr("transform", `translate(${width / 2}, 40)`)
            .text("Horsepower")
        yAxisScatter.append("text")
            .attr("class", "label")
            .attr("transform", `translate(-40, ${2 * height / 5}) rotate(-90)`)
            .text("Miles per gallon")

        // plot data
        points = scatterGroup.selectAll("circle")
            .data(scatterData)
            .join("circle")
            .attr("cx", (d) => xScaleScatter(d.hp))
            .attr("cy", (d) => yScaleScatter(d.mpg))
            .attr("r", 5)
            .attr("class", "non-brushed");

        // add brush
        scatterGroup.append("g")
            .call(brush);


        // bar chart:
        // reformat data
        let barData = getBarData(scatterData);

        // set up scales
        xScaleBar = d3.scaleBand()
            .domain(barData.map((d) => d.cyl))
            .range([0, width])
            .padding(0.1);
        yScaleBar = d3.scaleLinear()
            .domain([0, d3.max(barData, (d) => d.count)])
            .range([height, 0]);

        // axes
        let xAxisBar = barSvg.append("g") 
            .attr("transform", `translate(${margin.left}, ${margin.top + height})`)
            .call(d3.axisBottom(xScaleBar));
        let yAxisBar = barSvg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(yScaleBar));

        // label our axes
        xAxisBar.append("text")
            .attr("class", "label")
            .attr("transform", `translate(${width / 2}, 40)`)
            .text("Cylinders")
        yAxisBar.append("text")
            .attr("class", "label")
            .attr("transform", `translate(-40, ${2 * height / 5}) rotate(-90)`)
            .text("Number of records")

        // render bars
        // background bars
        barGroup.selectAll("rect")
            .data(barData)
            .join("rect")
            .attr("class", "non-brushed")
            .attr("x", (d) => xScaleBar(d.cyl))
            .attr("y", (d) => yScaleBar(d.count))
            .attr("width", xScaleBar.bandwidth())
            .attr("height", (d) => height - yScaleBar(d.count))
            .on("click", clickFxn);

    })
    .catch(function (err) {
        console.error(err);
    });

// helper functions
function deepCopy(inObject) {
    let outObject, value, key;
    if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) {
        value = inObject[key];
        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = deepCopy(value);
    }
    return outObject;
}

function getBarData(filteredData) {
    // expects prefiltered data
    let returnData = [];

    filteredData.forEach((obj) => {
        let uniqueCyl = returnData.reduce((prev, curr) => (prev && curr.cyl != obj.cyl), true);
        if (uniqueCyl) {
            returnData.push({
                "cyl": +obj.cyl,
                "count": 1
            });
        } else {
            let cylIdx = returnData.findIndex((elem) => elem.cyl == +obj.cyl);
            returnData[cylIdx].count++;
        }
    });
    returnData = returnData.sort((a, b) => a.cyl - b.cyl);
    // console.log(returnData);

    return returnData;
}

function brushFxn(event) {
    // revert the appearance of points
    points.attr("class", "non-brushed");

    brushRange = undefined;
    if (event.selection != null) {
        let brushCoords = d3.brushSelection(this);
        brushRange = {
            "x0": xScaleScatter.invert(brushCoords[0][0]),
            "x1": xScaleScatter.invert(brushCoords[1][0]),
            "y0": yScaleScatter.invert(brushCoords[1][1]),
            "y1": yScaleScatter.invert(brushCoords[0][1])
        }
    }

    // render changes in real-time
    update();
}

function clickFxn(event) {
    console.log(event);
    let clickedCyl = +event.target.__data__.cyl;

    if (!selectedCyl.some((e) => e == clickedCyl)) {
        selectedCyl.push(clickedCyl);
        selectedCyl.sort();
    } else {
        let idx = selectedCyl.indexOf(clickedCyl);
        selectedCyl.splice(idx, 1);
    }

    // render changes in real-time
    update();
}

function selectionFilter(d) {
    // checks whether each point meets the current selection criteria
    // get only points inside of brush AND in selected set of cyl values
    if (brushRange && selectedCyl.length > 0) {
        return (brushRange.x0 <= d.hp && brushRange.x1 >= d.hp && 
            brushRange.y0 <= d.mpg && brushRange.y1 >= d.mpg &&
            selectedCyl.some((e) => e == d.cyl));
    } else if (!brushRange) {
        // use brush only if it's active
        return(selectedCyl.some((e) => e == d.cyl));
    } else if (selectedCyl.length == 0) {
        return(brushRange.x0 <= d.hp && brushRange.x1 >= d.hp && 
            brushRange.y0 <= d.mpg && brushRange.y1 >= d.mpg);
    } else {
        return(false);
    }
}

function update() {
    // scatter
    points.attr("class", "non-brushed");
    points.filter(selectionFilter)
        .attr("class", "brushed");

    // bar
    let filteredScatterData = scatterData.filter(selectionFilter);
    filteredBarData = getBarData(filteredScatterData);

    // foreground bars
    barGroupOverlay.selectAll("rect")
        .data(filteredBarData)
        .join("rect")
        .attr("class", "brushed")
        .attr("x", (d) => xScaleBar(d.cyl))
        .attr("y", (d) => yScaleBar(d.count))
        .attr("width", xScaleBar.bandwidth())
        .attr("height", (d) => height - yScaleBar(d.count))
        .on("click", clickFxn);
}
