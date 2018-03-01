var svg, lastX = -1, lastY = -1;

var setup = function () {
    /*svg = document.createElement("svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.style.width = "500px";
    svg.style.height = "500px";
    svg.style.border = "1px dashed #000";
    svg.addEventListener("click", connectTheDots);
    document.getElementsByTagName("body")[0].appendChild(svg);*/
    svg = document.getElementById("max");
};

var connectTheDots = function(evt) {
    if(lastY >= 0) {
        svg.appendChild(makeLine(evt.offsetX, evt.offsetY));
    }
    svg.appendChild(makeCircle(evt.offsetX, evt.offsetY));
    lastX = evt.offsetX;
    lastY = evt.offsetY;
}

var makeCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");
    return circle;
};

var makeLine = function(x2, y2) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "blue");
    return line;
};

setup();