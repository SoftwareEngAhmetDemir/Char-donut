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
    // console.log(d.data)
    // console.log(d);
    // console.log(i);
    // console.log(color(i));
    return color(i);
  })
  .on("mouseover", function (d, i) {
    // console.log(i.index);
  
    console.log(color(4-i.index));
    // console.log(color(0));
    // return i;
  });
