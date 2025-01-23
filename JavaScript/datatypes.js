//DATA TYPES


//1. STRING:  set of character enclosed within quotes 
//supported quotes are: ''," ", ``(back ticks),"' '"(triple is no possible )
console.log("STING")
let batch='weekend batch'
let insitutte="pyspider"
let today=`saturday`
console.log('we are', batch, "of ", insitutte,`attending on`,today)
// using template literal method   ---> ` `
console.log(`We are ${batch} attending in ${insitutte} only on ${today}`);
// to check datatype
console.log(`data type of ${today}:`,typeof today)



//2. Number
console.log("NUMBER")
let num=1111
console.log("number is",num)
let deci=45.78
console.log("decimal is",deci)
//to check datataype
console.log(`data type of ${deci}:`,typeof deci)
let capacity=1234567678234567834567
//limitation of number: number can hold 16 digit
console.log(capacity)
//to work on limitation  -->BigInt


//3.BigInt  --> hold the numbers which are large to handle
console.log("BIGINT")
let bigintnumber=BigInt("123456789876543212345678909876543")
console.log("big number",bigintnumber)
let big2=12345678909876543234567899876n
console.log("big number using n",big2)
//to check datataype
console.log(`data type of bignumber is is`,typeof big2)



//4.Boolean --> can hold True or False
console.log("BOOLEAN")
let isHolidayTom=true
console.log(isHolidayTom)
console.log(`data type of ${isHolidayTom} is is`,typeof isHolidayTom)



//5.undefined -->   variable without value (interview question)
console.log("UNDEFINED")
let salary
console.log(salary)
console.log(`data type of ${salary} is is`,typeof salary)
salary=1000
console.log(salary)
console.log(`data type of ${salary} is is`,typeof salary)


//6.Null -->refers to non-existing "object" or null pointer
//it is special value, which is emplty, unKnown or nothing
console.log("NULL")
let age=null
console.log(age)
console.log(`data type of ${age} is `,typeof age)
// comes under object, we cant define which type of value can be stored


//7.OBJECT --> enclosed by { key: value , key: value }  key: value is called property
console.log("OBJECT")
let employee={
    name:"jay",
    desg:"software enginner",
    yoe:30,
    perf:"excellent",
    isPresent:false,
    contact:{
        mobile:9876543212,
        email:"jaya@nicole.com"
    }
}
console.log("employee name: ",employee['name'])
console.log("employee email: ",employee['contact']['email'])
console.log("employee phonenumber",employee.contact.mobile)


//ADDING  NEW PROPERTY
employee.salary=4000
console.log(employee)

//DELETING PROPERTY
delete employee.isPresent
console.log(employee)
