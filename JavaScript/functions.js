// // 1.NAME FUNCTION

// function Announcement() {
//     console.log("TODAY YOUR ARE HAVING CLASS AT 4PM")
// }
// Announcement()
// console.log("")





// // 2. ANONYMOUS
// let name=function(userName){
//     console.log(`Hello ${userName} darling get well soon`)
// }
// name("vijay")
// console.log()





// // 3. ARROW(IMP)
// const greet=(name)=>{
//     console.log(`${name} CONGRULATIONS YOU ALL GOT JOB`)
// }
// greet("VIJAY")

// const welcome=(user)=> console.log(`${user} Welcome to the office`)
// welcome("Vijay BG")
// console.log()

// // RETURN IN FUNCTION
// let add=(a,b)=>{
//     // console.log(a+b)
//     return a+b
//     console.log("hello")    //once return is used, cant use any other statements
// }
// // let res =add(10,3)
// // console.log("ADDITION: ",res)
// console.log("ADDITION:",add(10,3))
// //in js arguments no of arguments can be or cant be equal to parameters
// console.log()
// let res=0
// let sum=(...nums)=>{
//     console.log(nums)
//     for(let i of nums){
//         res+=i
        
//     }
//     return res
// }
// let finalRes=sum(1,2,3,4,5,6,7,8,9)
// console.log("sum of all",finalRes)
// console.log()




// 4. IIFE immediately invoked function expression
(function(){
    console.log("this is iife")
})()



// HOF HIGHER ORDER FUNCTION
// function which accepts another function as its parameter

let display=(ress)=>
    console.log("addition:",ress)
let add=(a,b)=>{
    // console.log(a+b)
    return a+b
}
// let result=add(10,3)
// display(result)    //this is hof

display(add(10,3))   //hof