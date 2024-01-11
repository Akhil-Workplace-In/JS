const user = {
    username: "akhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}  

// user.welcomeMessage()

// user.username = "sam";

// user.welcomeMessage();

user.welcomeMessage()
console.log(this); // In browser context this refers to browser window object

