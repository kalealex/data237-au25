## DATA 2x700 Readings
Here are the reading resources for the course separated by the topics we study each week. 

### Week 1: Introduction
#### Value of data visualization
- [The Value of Visualization](https://vanwijk.win.tue.nl/vov.pdf)
- [The Eyes Have It](https://ieeexplore.ieee.org/document/545307)

#### Grammar of graphics
- [A Layered Grammar of Graphics](https://byrneslab.net/classes/biol607/readings/wickham_layered-grammar.pdf)

### Week 2: Fundamentals of visualization design
#### Data models, Literate programming
- This [paper by Cleveland and McGill](http://euclid.psych.yorku.ca/www/psy6135/papers/ClevelandMcGill1984.pdf) set a precedent for treating visualization effectiveness as an empirical question. Many papers have followed up on this work, and the findings remain roughly intact.
- [Mackinlay's APT paper](https://dl.acm.org/doi/10.1145/22949.22950) lays out his expressiveness and effectiveness criteria for visualization design. This paper kicked off a long line of work on visualization recommender systems.
- Particularly interesting violations of the expressiveness principle (a.k.a. "tell the truth and nothing but the truth") occur when people's expectations about what a certain kind of chart will show are violated. Among other sources, these expectations are informed by graphical conventions, such as the expectations that people have about the semantics of bars and lines addressed in this [paper by Zacks and Tversky](https://dcl.wustl.edu/files/2017/09/zacksmemcog99-12d5ktx.pdf), which I mentioned in class.

#### Design process and critique
- Tufte's [The Visual Display of Quantitative Information](https://kyl.neocities.org/books/%5BTEC%20TUF%5D%20the%20visual%20display%20of%20quantitative%20information.pdf). Classes like this one often assign the first three chapters of this book as reading, probably because Tufte's work is rich with examples. However, Tufte sometimes asserts as design principles ideas that don't hold up when subjected to empirical scrutiny. His work is still viewed by the visualization community, with skepticism, as a wonderful resource.
- A few years ago, some of my colleagues at Northwestern decided there was too much visualization research for practitioners to keep up with. They led an effort to write this review article summarizing the [science of "what works"](https://journals.sagepub.com/doi/reader/10.1177/15291006211051956) in data visualization design.
- [Educating the reflective practitioner: Toward a new design for teaching and learning in the professions](https://www.daneshnamehicsa.ir/userfiles/file/Manabeh/Educating%20the%20reflective%20practitioner.pdf)
- [The Shape Parameter of a Two-Variable Graph](https://www.jstor.org/stable/2288843?seq=1)
- [Whisper, don’t scream: Grids and transparency](https://ieeexplore.ieee.org/document/5620897)

### Week 3: Color and Cartography
#### Perception
- [Perception in Visualization](https://www.csc2.ncsu.edu/faculty/healey/PP/) by Christopher Healey.
- [A Survey of Perception-Based Visualization Studies by Task](https://arxiv.org/pdf/2107.07477)

#### Color
- [Color Semantics in Human Cognition](https://journals.sagepub.com/doi/full/10.1177/09637214231208189)

#### Visualizing data in maps
- [1 Cartography](https://icaci.org/files/documents/wom/01_IMY_WoM_en.pdf) (book chapter)
- A nice [survey paper](https://dl.acm.org/doi/full/10.1145/3544548.3581370) on map making tools and why they are mostly hard to use.

### Week 4:  Data interaction
#### Interaction and Animation (two part lecture)
- Data driven documents ([D3](http://vis.stanford.edu/papers/d3)) is the javascript library that supports most interactive visualizations on the web.
- [Animated Transitions in Statistical Graphics](http://vis.stanford.edu/files/2007-AnimatedTransitions-InfoVis.pdf) is an authoritative paper on animation design for visualization.
- [Animation: Can it Facilitate?](https://hci.stanford.edu/courses/cs448b/papers/Tversky_AnimationFacilitate_IJHCS02.pdf) is a great review article by Barbara Tversky.

#### Making data interactive
- [Designing Animated Transitions to Convey Aggregate Operations](https://idl.cs.washington.edu/files/2019-AnimatedAggregates-EuroVis.pdf)

### Week 5: Uncertainty visualization
#### Uncertainty visualization
- Hullman's article on [Why authors don't visualize uncertainty](https://mucollective.northwestern.edu/files/2019-Value%20of%20Uncertainty-VIS.pdf).
- Kay's first study on [uncertainty in bus arrival times](https://mucollective.northwestern.edu/files/2016-WhenIsMyBus-CHI.pdf) where he introduces quantile dotplots, and the [second study](https://mucollective.northwestern.edu/files/2018-UncertainBusDecisions-CHI.pdf) where they use a decision task.
- Prof. Kale's work on [decision making with uncertainty visualizations](https://mucollective.northwestern.edu/files/2020%20-%20Kale,%20Visual%20Reasoning%20Strategies%20for%20Effect%20Size%20Judgements.pdf).
- [Book Chapter on Uncertainty Visualization](http://space.ucmerced.edu/Downloads/publications/Uncertainty_Visualization_Padilla_Kay_Hullman_2022.pdf) (book chapter)

#### Visualizations as model checks
- Hullman and Gelman's manifesto on [visualizations as model checks](https://mucollective.northwestern.edu/files/2021-hdsr-paper.pdf).
- Kale's work on [model checking in exploratory data analysis](https://idl.cs.washington.edu/files/2024-EVM-TVCG.pdf)

#### Visualizing regression model outputs
- [Visualization of Regression Models Using visreg](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=40686123a2897ec3337955117a0d98854c223e23)
- [ggdist: Visualizations of Distributions and Uncertainty in the Grammar of Graphics](https://mucollective.northwestern.edu/files/2023-ggdist.pdf)

### Week 7: Data communication for wider audiences
#### Storytelling
- [Narrative Visualization: Telling Stories with Data](http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf)
- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
- [Superpowers as Inspiration for Visualization](https://arxiv.org/pdf/2108.03524) (content analysis of comics to inform visualization)
- Papers on [Idyll](https://idl.cs.washington.edu/files/2018-Idyll-UIST.pdf) and [Idyll Studio](https://idl.cs.washington.edu/files/2021-IdyllStudio-UIST.pdf).

#### Accessibility
- [Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content, Chartability](https://vis.csail.mit.edu/pubs/vis-text-model/)

### Week 8: Rhetorical visualization
#### Persuasive visualization
- Hullman's paper on [visualization rhetoric](http://users.eecs.northwestern.edu/~jhullman/vis_rhetoric.pdf).
- Correll's paper on [truncating the y-axis](https://arxiv.org/pdf/1907.02035).
- Mehta's paper on [designing for disclosure in data visualizations](https://arxiv.org/pdf/2508.08383v1).

#### Deceptive visualization
- Correll's paper on [visualization ethics](https://arxiv.org/pdf/1811.07271).
- [Black Hat Visualization](https://idl.cs.washington.edu/files/2017-BlackHatVis-DECISIVe.pdf)
- [Surfacing Visualization Mirages](https://arxiv.org/pdf/2001.02316)
- Recent analysis of [how people actually lie with charts](https://dl.acm.org/doi/pdf/10.1145/3544548.3580910).

### Week 9: Visualization for model interpretability
#### Visualization for machine learning interpretability
- Fred Hohman's work on [Gamut](https://fredhohman.com/papers/19-gamut-chi.pdf) and [Summit](https://fredhohman.com/papers/19-summit-vast.pdf).
- Interpretability by proxy using [LIME](https://arxiv.org/pdf/1602.04938).
- Interpretability by marginal feature importance using [SHAP](https://arxiv.org/pdf/1705.07874).
- A brief write up about [Microsoft's interpretML](https://arxiv.org/pdf/1909.09223).
