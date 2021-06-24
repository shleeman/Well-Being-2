    var width = window.innerWidth;
    var height= window.innerHeight;

    var selectedColor = "#12607a"

     var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.select("#draw").on("click", function(){
        var position = d3.mouse(this)
        svg.append("draw")
            .attr("fill", selectedColor)
            .attr("r", 3)
            .attr("cx", position[0])
            .attr("cy", position[1]);
    });

    svg.on("mousedown", function() {
    svg.on("mousemove", function() {
        var position = d3.mouse(this)
        svg.append("circle")
            .attr("fill", selectedColor)
            .attr("r", 3)
            .attr("cx", position[0])
            .attr("cy", position[1]);
    })});
    svg.on("mouseup", function() {
    svg.on("mousemove", function() {

        })
    });

    d3.select("#reset").on("click", function() {
        d3.selectAll("circle")
        .remove()
    });