let data=['pyspiders',2025,11.12,true]
console.log("printing")
console.log(data)
console.log()

//finding the data
console.log("length of data:",data.length)
console.log()

//iteration
console.log("iteration")
console.log("using for loop")
let cart=['mobile','TV','Clothes','Groceries','Shoes','laptop']
for(let i=0;i<cart.length;i++){
    console.log("items in cart",cart[i])
}
console.log("-----------------------------")
console.log()
console.log("using for of loop")
for(let i of cart){
    console.log(i)
}
console.log("--------------------------------")
console.log("using for Each loop")
cart.forEach((item)=>console.log("items in cart",item))
console.log("----------------------------------")


//BUILT in function

let product=['mobile','TV','Clothes','Groceries','Shoes','laptop','book','shoes','bottle']
//1. toString()
let res=product.toString()
console.log("1.converted to string:",res)
console.log(typeof(res))
console.log(typeof(product))

console.log("---------------------------")
//2. JOIN()
console.log("JOIN",product.join("-"))
console.log("---------------------------")

//3. POP()
console.log("popped item is",product.pop())
console.log("----------------------------")
console.log("length after pop",product.length)

//4. PUSH
let result=product.push("chair")
console.log("length after push",product.length)
console.log("after push",product)
console.log("-------------------------------")

//5. unshift -->to add the item at first
let unshiftt=product.unshift("sofa")
console.log(unshiftt)
console.log("After unshifting an element: ",product)
console.log("-----------------------------------")

//6. shift -->removes 1st element
let shifft=product.shift()   //array is empty then return undefined
console.log(shifft)
console.log("after shifting an element",product)
console.log("------------------------------------")

//7. delete -->deleted according to the index, memory reference is still present after deleting also
console.log(product)
console.log("after deleting",delete product[3])
console.log("after deleteing",product)
console.log("-----------------------------------------")

//8. concat()-->combinaning one array with another
brand=("bigbasket","dmart")
let combined=product.concat(brand)
console.log("after concat",combined)
console.log("------------------------------------")

//9. sort
console.log("after sorting",product.sort())
number=[5,1,3,9,101,0,8]
console.log("after sorting numbers",number.sort())  //doesnt work
let sorted=number.sort((a,b)=>{
    return a-b
})
//here a-b is the logic()ascending order
//b-a is desending order
console.log("after quick sort",sorted)
console.log("-------------------------------------")

//10. slice -->obtaining sub array based on starting and end index
let slice=product.slice(2,7)
console.log("sub array",slice)
console.log("--------------------------------------")

//11. slpice  --> 3 value but 2 value mandotary
// value 1:targeted index number,  
// value2: number of elements should to be removed, 
// value 3(optional): elements to be added

let arr=[1,2,3,4,5,6,7,8,9,45]
let splice=product.splice(2,3,"mon","tues","wed","thurs")
console.log(splice)
console.log(typeof(splice))
console.log("after splice:",product)
console.log("-------------------------------------")

//12. reverse
console.log("before reverse:",product)
console.log("after reversing",product.reverse())
console.log("-----------------------------------------")

//13. map-->hof alternate to for loop
let natural=[1,2,3,4,5,6,7,8,9,10,11,345,90]
cube=natural.map((item) =>{
    return item ** 3
})
console.log("cube is",cube)


//14. filter --> hof, passing case
let num=[1,8,27,64, 125, 216,474552, 729, 448452489675007,41063625, 729000]
let filter=num.filter((element)=>{
    return element%3===0
})
console.log("after filtering",filter)

//15. reduce -->hof
let reduce=filter.reduce((acc,curVal)=>{
    return acc+curVal
})
console.log("after reduce",reduce)


//16. flat-->flat the nested array
let nestedArr=[1,2,3,4,5,7,[45,78,[56,69,[44,12],67],98],456]
console.log(nestedArr)
console.log("nested array->",nestedArr[6][2][0])
console.log(nestedArr.flat(Infinity))