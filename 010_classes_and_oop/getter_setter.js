class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value;
    }
}   

const akhil = new User("akhil@example.com", "abc");

console.log(akhil.password)

console.log(akhil.email)