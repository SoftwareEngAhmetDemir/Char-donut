var data = [10, 50, 80, 90, 60];
data  = data.sort()
var r = 150;
var color = d3
  .scaleOrdinal()
  .range(["red", "blue", "orange", "yellow", "green"]);
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

var group = canvas.append("g").attr("transform", "translate(300,300)");

var arc = d3.arc().innerRadius(200).outerRadius(r);

var pie = d3.pie().value(function (d) {
  return d;
});

console.log(pie(data));
let dp = pie(data).sort()
var arcs = group
  .selectAll(".arc")
  .data(dp)
  .enter()
  .append("g")
  .attr("class", "arc");

arcs
  .append("path")
  .attr("d", arc)

  .attr("fill", function (d, i) {
   
    return color(i);
  }).on("mouseover", function (d, i) {
    let dx  = d.clientX;
    let dy = d.pageY;
  d3
  .select('#textbox').text(color(4-i.index)).
  style('position','absolute')
  .style('margin-left',dx+'px')
  .style('top',dy+'px');
   
    
  }).transition()
  .duration(function(d, i) {
    return 2000;
  })
      .attrTween('d', function(d) {
 var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
 return function(t) {
     d.endAngle = i(t);
   return arc(d);
 }})
  
