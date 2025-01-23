//CONDITIONS
// IF 


let prompt = require('prompt-sync')({sigint: true});
// let isholiday = prompt("IS HOLIDAY TOMORROW(TRUE OR FALSE)?");

// // Convert string to boolean
// if (isholiday.toLowerCase() === "true") {
//     console.log("Enjoy your holiday");
// }
// console.log("Program completed");



//IF-ELSE
// let age = parseInt(prompt("Enter your age: ")); // Convert input to a number
// if (age >= 18) {
//     console.log("You are eligible to vote!");
// } else {
//     console.log("You are not eligible to vote.");
// }
// console.log("Program completed");



// else if
// let studentName = prompt("ENTER YOUR NAME: ");
// let qual = prompt("ENTER YOUR QUALIFICATION: ");

// if (studentName !== "" && qual !== "") {
//     console.log(`Entered name: ${studentName}`);
//     console.log(`Your qualification is: ${qual}`);
// } else if (studentName !== "") {
//     console.log(`Entered name: ${studentName}`);
// } else if (qual !== "") {
//     console.log(`Your qualification is: ${qual}`);
// } else {
//     console.log("Incomplete details");
// }





//NESTED IF
// let studentName = prompt("ENTER YOUR NAME: ");
// if (studentName!==""){
//     let qual = prompt("ENTER YOUR QUALIFICATION: ");
//     if (qual !== "") {
//         console.log({
//             name:studentName,
//             qualification:qual
//         })
//     }
//     else{
//             console.log("PLEASE ENTER YOUR QUALIFICATION ")
//         }
// }
// else{
//     console.log("PLEASE ENTER YOUR NAME ")
// }


//SWITCH
let day=newDate().get
let msg
day=prompt("enter today's day: ").toLowerCase()
switch(day){
    case "Monday":
        msg="Once again Monday"
        break
    case "Tuesday":
        msg="Tuesday sucks"
        break
    case "Wednesday":
        msg="White Day"
        break
    case "Thursday":
        msg="One more day to go"
        break
    case "Friday":
        msg="Finally tomorrow saturday"
        break
    case "Saturday":
        msg="Weekened"
        break
    case "Sunday":
        msg="Everyday needs to be sunday"
        break
    default:
        msg="Ohh! Something went wrong"
        break
}
console.log(msg)


