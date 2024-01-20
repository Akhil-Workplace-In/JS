//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "cha@google.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea", "tea@google.com", "123");

console.log(tea.encryptPassword());
// console.log(tea.changeUserName());