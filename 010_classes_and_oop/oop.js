//Object literal

const user = {
    username: 'Akhil',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.table([this.username, this.loginCount, this.signedIn]);
        console.log(this);
    }
}

// console.log(user["loginCount"]);
// console.log(user.signedIn)
// user.getUserDetails()

//constructor functions
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

// new keyword creates empty object (Also called instance)
const userOne = new User("Akhil", 10, true);
// console.log(userOne);
// const userTwo = new User("hitesh", 12, false);
// console.log(userTwo);

console.log(userOne.constructor) //self reference