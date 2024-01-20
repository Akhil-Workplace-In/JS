// const promiseOne = new Promise(function(resolve, reject){
//     //Do an aync task
//     //DB calls, cryptography, network calls
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async 2 consumed");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"});
//     }, 1000);
// })

// promiseThree.then(function(data){
//     console.log(data);
// })

// const  promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "hitesh", password: "12"});
//         } else{
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((userName)=>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected")) 

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Javascript", password: "12"});
//         } else{
//             reject('Js WENT WRONG')
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
//     ;
// }

// consumePromiseFive()

// async function getUserDetail(){
//     try {
//         const response = await fetch('https://api.github.com/users/Akhil-Workplace-In');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getUserDetail();


fetch('https://api.github.com/users/Akhil-Workplace-In')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error);
})