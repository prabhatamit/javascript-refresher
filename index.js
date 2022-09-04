/*
console.log("hellow world!")
//let num = 7
let num = 9.8
console.log(num, typeof num)

let y 
console.log(y, typeof y)

//conversion
value = "786"
console.log(value, typeof value)

value1 = Number("786")
console.log(value1, typeof value1)

//template literal -> ${}

let num1 = 9
let num2 = 9
let result = num1 + num2

console.log(`addtion of ${num1} and ${num2} is ${result}`)

//check a given numner is even or odd

let numb = 3

if(numb % 2 === 0){
    console.log(`Given ${numb} is EVEN`)
}
else{
    console.log(`Given ${numb} is ODD`)
}

//ternary operator
//condition ? exprIfTrue : exprIfFalse

(numb % 2 === 0) ? console.log("EVEN....") : console.log("ODD....") 

//while loop with debugging

/*
home work
cal with all the basic operation
print all the even numbers from 1 to 100
find a given number is prime or not
*/





// Detecting a given number is prime or not


let given_number = 9
let i = 2
while(i <= given_number){
   // console.log("given numner is: " + given_number)
    //console.log("value of is is: "+ i)
    if(given_number % i == 0){
        if(given_number === i){
            console.log("**** PRIME ****")
        }else{
            console.log("**** NOT PRIME ****")
            break
        }
    }
    i++
}



//function
/*
function add(num1, num2){
    result = num1 + num2
    return result
    
}



console.log("result of addtion is: " + add(11,11))
*/

