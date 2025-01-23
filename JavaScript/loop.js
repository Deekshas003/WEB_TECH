// LOOP
// FOR LOOP
console.log("FOR LOOP")
for(let i=0;i<11;i++){
    console.log("for loop",i)
}
console.log()

//FOR IN
console.log("FOR IN")
let bigBasket=["fruits","veggies","juices","chocolate","household","clothes"]
for (let i in bigBasket){
    console.log(i,bigBasket[i])
}
console.log()


// FOR OF
console.log("FOR OF ")

let bigBasket2=["fruits","veggies","juices","chocolate","household","clothes"]
for (let i of bigBasket2){
    console.log(i)
}
console.log()


// WHILE
let i=0
while(i<=5){
    console.log(i)  
    i++
}
console.log()
let j=10
let res=''
while(j>0){
    // console.log(j)  
    res+=j+' '
    j--
}
console.log(res) 
console.log()

// DO WHILE
let k =20
do{
    console.log("this is do while")
    k++
}while (k<=10)




