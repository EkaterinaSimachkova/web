//1
let city1 = {};
city1.name = "ГородN";
city1.population = 10e6;
console.log(city1);
//2
let city2 = {
    name: "ГородM",
    population: 1e6
};
console.log(city2);
//3
city1.getName = function () {
    return this.name;
};
city2.getName = function () {
    return this["name"];
};
console.log(city1.getName());
console.log(city2.getName());
//4
city1.exportStr = function () {
    let str = "";
    for (key in this) {
        if (typeof this[key] !== "function") {
            str += `${key}=${this[key]}\n`;
        }
    }
    return str;
};
city2.exportStr = function () {
    let str = "";
    for (key in this) {
        if (typeof this[key] !== "function") {
            str += `${key}=${this[key]}\n`;
        }
    }
    return str;
};
console.log(city1.exportStr());
console.log(city2.exportStr());
//5
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());