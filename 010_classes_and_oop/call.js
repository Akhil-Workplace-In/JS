
function SetUsername(username){
    //complex DB calla
    this.username = username;
    console.log("called")
}


function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email;  
    this.password = password;
}

const chai = new createUser("chai", "chai@example.com", "123");
console.log(chai);