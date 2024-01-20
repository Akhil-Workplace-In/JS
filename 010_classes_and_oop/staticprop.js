class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`); 
    }
    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const akhil = new User("akhil");
// console.log(akhil.createId());

const iphone = new Teacher("iphone", "iphone@gmail.ocm");
iphone.logMe();
console.log(iphone.createId())