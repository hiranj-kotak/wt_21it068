const car = {
    isFuelType: "CNG",
    isType: "SUV",
    isBrand: "BMW",
    display() {

        document.write(`<h1>calling by object</h1>this car use  ${this.isFuelType}. type of this car is ${this.isType} and brand is ${this.isBrand}<br>`);
    },
};
console.log(car.display())
function GetDetail(fuel, type, brand) {
    this.isFuelType = fuel;
    this.isType = type;
    this.isBrand = brand;
    this.display = function () {
        document.write(`<h1>calling by Constructor</h1>this car use  ${this.isFuelType}. type of this car is ${this.isType} and brand is ${this.isBrand}`);
    }
};
let ans = new GetDetail("Diesel", "Luxury", "Tata")
console.log(ans.display());