// function circle(radius) {
//     this.radius = radius;
    
//     this.area = function () {
//         return Math.PI * this.radius * this.radius;
//     };
// }
// let c = prompt("enter the radius of circle: ")
// let circ = new circle(c);
// prompt('Area of circle =', +circ.area().toFixed(2));


function circle(radius){
    let area;
    area = Math.PI * radius * radius;
    return area;
}
let radius = prompt("enter radius");
alert(circle(radius).toFixed(1));