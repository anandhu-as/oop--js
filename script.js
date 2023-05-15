//class inheritance
class car {
  constructor(carname) {
    this.carname = carname;
  }
  present() {
    return `I have ${this.carname}`;
  }
}
class Model extends car {
  constructor(carname, model) {
    super(carname);
    //super method refers to the parent class
    this.model = model;
  }
  carModel() {
    return `${this.present} it is a ${this.model}`;
  }
}
const myCar = new Model("supra", "toyota");
console.log(myCar.carModel());
