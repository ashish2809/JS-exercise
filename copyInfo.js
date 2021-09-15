let myobj={
    Name:"Ashish",
    Id: 1234,
    Role: "Software Engineer",
    Location: "Ghaziabad",
}
let mynewobj = Object.assign({}, myobj);
console.log('Copied object = ', mynewobj);
console.log('Original object = ', myobj);