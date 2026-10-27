// Chart 1: Koala sightings across Australia (bin map)
var vg_1 = "js/Chart01_BinMap.vg.json";
vegaEmbed("#bin_map", vg_1).then(function(result) {
}).catch(console.error);

// Chart 2: Sightings per 1,000 km² by state (choropleth map)
var vg_2 = "js/Chart02_Choropleth.vg.json";
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
}).catch(console.error);

// Chart 3: Who recorded them? (waffle chart)
var vg_3 = "js/Chart03_Waffle.vg.json";
vegaEmbed("#waffle_chart", vg_3).then(function(result) {
}).catch(console.error);

// Chart 4: Sightings by year and state (heatmap)
var vg_4 = "js/Chart04_Heatmap.vg.json";
vegaEmbed("#heatmap", vg_4).then(function(result) {
}).catch(console.error);

// Chart 5: Listed (QLD, NSW, ACT) vs Unlisted (VIC, SA) (butterfly chart)
var vg_5 = "js/Chart05_Butterfly.vg.json";
vegaEmbed("#butterfly_chart", vg_5).then(function(result) {
}).catch(console.error);

// Chart 6: When koalas are seen (grouped bar chart)
var vg_6 = "js/Chart06_GroupedBarChart.vg.json";
vegaEmbed("#grouped_bar_chart", vg_6).then(function(result) {
}).catch(console.error);

// Chart 7: Why koalas were rescued (100% stacked area chart)
var vg_7 = "js/Chart07_StackedArea.vg.json";
vegaEmbed("#stacked_area", vg_7).then(function(result) {
}).catch(console.error);

// Chart 8: Dangerous times of the year (connected dot plot)
var vg_8 = "js/Chart08_ConnectedDotPlot.vg.json";
vegaEmbed("#connected_dot_plot", vg_8).then(function(result) {
}).catch(console.error);

// Chart 9: Rescue hotspots in South East Queensland (proportional symbol map)
var vg_9 = "js/Chart09_SymbolMap.vg.json";
vegaEmbed("#symbol_map", vg_9).then(function(result) {
}).catch(console.error);

// Chart 10: Koala monitoring programs (Gantt chart)
var vg_10 = "js/Chart10_Gantt.vg.json";
vegaEmbed("#gantt_chart", vg_10).then(function(result) {
}).catch(console.error);

// Chart 11: More rescued koalas are going home (multi-line chart)
var vg_11 = "js/Chart11_MultiLineChart.vg.json";
vegaEmbed("#multi_line_chart", vg_11).then(function(result) {
}).catch(console.error);
