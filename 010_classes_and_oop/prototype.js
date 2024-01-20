let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer", 
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akhil = function(){
    console.log(`akhil is present in all object`);
}

// heroPower.akhil();
// myHeroes.akhil();

Array.prototype.heyAkhil = function(){
    console.log(`akhil says hello`);
}

// myHeroes.heyAkhil();
// heroPower.heyAkhil();

//inheritance

const user = {
    name: "akhil"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

//////////////

let anotherUserName = "chaiAurCode     ";

String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUserName.trueLength(); //reference of anotherUserName is in context of this

"akhil".trueLength();
"iceTea".trueLength();

