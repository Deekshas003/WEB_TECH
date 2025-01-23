//using let
let num=100
console.log("number is",num)
{
    console.log("inside the block number is",num)
    let num2=200
    console.log("inside the block number2 is",num2)
}
//doesnt work
// console.log("outside the block number2 is",num2)

num=300
console.log("num after re-instailization ",num)
//doesnt work
// let num=500
// console.log("num after re-decleration ",num)