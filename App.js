//factory function
const human = (name, age, place) => {
  return {
    name,
    age,
    place,
  };
};
const person1 = human("jhon", 22, "usa");
const person2 = human("leo", 32, "usa");
//object.create()
const human2 = (myName, age, place) => {
  return {
    myName,
    age,
    place,
  };
};
const me = Object.create(human2);
me.myName = "yue";
me.age = 17;
//me inherits from human2, its constructor function is human2 if i console.log(me) it gives me a function

//Constructor function
function Person(personName, personAge) {
  this.personName = personName;
  this.personAge = personAge;
}
const firstPerson = new Person("will", 19);
const secondPerson = new Person("beckham", 22);

//ES6 class
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk(){
  return `${this.name} talking`
  }
}
const person3 = new person("berlin", 34);
person3.talk()
// here person3 is instance of person



