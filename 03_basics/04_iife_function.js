//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})(); //don't forget to put ;(terminator) at the end of iife to run other following iife

//parameter passed in iffe
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('akhil');