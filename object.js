/*
all about defining object in JavaScript
*/
/**************************/

/*way of declaring a javascript object
let book = {
    "title":"javascript",
    "author":{
        "firstname":"John",
        "lastname": "Dell"
    },
    "year":2021,
    "copies_sold":39233
}
console.log(book)*/

//2nd way of creating object
/*
let book = new Object()
book.title = "Java"
book.author = "Hitesh"

console.log(book)

//changing the attribute
book.title = "Blockchain"
book["author"] = "Amit Prabhat"
console.log(book)
*/

//3rd way not used so often
//use it when temp fast object is need and not require for future purpose

/*
let obj1 = Object.create({x:2,y:2})
let result = obj1.x * obj1.y
console.log("*** result is: "+ result)
*/

/*
let mycar = new Object()
mycar.company = "BMW"
mycar.year = "2021"
console.log(mycar)
*/

//create a student object
/*
let student = new Object()
student.name = "Amit"
student.age = "36"
student.highest_education = "MTech."
student.subject = {"math":99,"science":88}

console.log(student)
*/

/*
anonymous function
assigning function
*/

let add = function(){
    console.log("anonymous function called...")
}

add()




