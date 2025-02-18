let str="PYspiders"
for (let i in str){
    console.log(str[i])
}
console.log(str[0])
// console.log(str[-1])   -->undefined

// 1.toUppercase()
console.log("--------------------------")
console.log("uppercase: ",str.toUpperCase())

// 2.toLowerCase
console.log("--------------------------")
console.log("lowercase:",str.toLowerCase())

//3.length
console.log("--------------------------")
console.log("length:",str.length)

//4.Slice
console.log("--------------------------")
let mail="deekshasbhat@gmail.com"
let empName=mail.slice(0,12)
let domain=mail.slice(12)

console.log("Sliced string: ",empName)
console.log("Sliced string: ",domain)

//5. concat
let newMail=empName.concat(domain)
console.log("newMail")

let prompt=require('prompt-sync')({sigint:true})
let newEmp=prompt("Enter the username: ").toLowerCase()
let newEmpMail=newEmp.concat(domain)
console.log("Email id for new employment: ",newEmpMail)

//6. Replace
let regeneratedName=newEmpMail.replace('bg','girish')
console.log(`Regenerated name id of new employee ${newEmp} is: ${regeneratedName}`)

//7.trim
let user="      pyspiders       "
console.log("before trimming: ",user)
console.log("after trimming: ",user.trim())

//8.trimStart()
//9.trimEnd()

//10.padStart() --> 2 parameter (maxlength, fillstring)
let str1='Pysp'
console.log("padStart: ",str1.padStart(10,"js"))
// Real time example for mobile 
let mobile=prompt("Enter your 10 digit: ")
let last4Digit= mobile.slice(6)
console.log(last4Digit.padStart(10,"*"))

//11.padEnd()
//Real time example for email
let gmail="deekshasbhat1809@gmail.com"

//12. split()
let splitMail=mail.split("")
console.log(splitMail)

//13. charAt() -->it returns the character which is present at specified index
console.log(mail)
let charPresent=mail.charAt(12)
console.log(`Character at present at 12th index ${charPresent}`)


//14. indexOf
let indexNum=mail.indexOf('@')
console.log("Index of @: ",indexNum)


//15.charCodeAt()--returns ascii value
let uniqueval=mail.charCodeAt(1)
console.log(`ASCII value of char which is present in index 1: ${uniqueval}`)


//16.includes
let res = mail.includes("@")
let res2= mail.includes("abc")
console.log("is mail is valid",res)
console.log("is mail is valid",res2)

// 17. startsWith()
let res3=mail.startsWith("deeks")
let res4=mail.startsWith("Deeks")
console.log("StartsWith: ", res3,res4)

//18.endsWith()


//19.lastIndexof()
let insit="girinagar"
console.log("First index",insit.indexOf("a"))
console.log("last index ",insit.lastIndexOf("a"))

//20. match()
let String="dont trouble the trouble.If you trouble the trouble , Trouble troubles you. Im not the trouble Im the Truth "
t1=String.match(/trouble/)
console.log("1st: ",t1.length)
t2=String.match(/trouble/g)
console.log("2nd: ",t2.length)
t3=String.match(/trouble/gi)
console.log("3rd: ",t3.length)
