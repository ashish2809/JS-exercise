

function circle(radius){
    let area;
    area = Math.PI * radius * radius;
    return area;
}
let radius = prompt("enter radius");
alert(circle(radius).toFixed(1));
