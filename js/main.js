const text = "Hello world!"
console.log(text)

const number = 543

console.log("number:", number)

let numberTwo = 986

console.log("numberTwo:", numberTwo)

// numberTwo = 1

// console.log(numberTwo)

// number = 2 //! cannot reassign a const

console.log(number+numberTwo)

console.log(text+number)    //number blir string når plusset med string

console.log(text,number)    //number blir tall

const objectExample = {
    name: "Andreas Varholm",
    age: 31,
    adress: "Tønsberg"
}



console.log(objectExample)      // skriver ut hele objectExample
console.log(objectExample.age)  // skriver ut age i objectExample

const fruitsArray = [5, 1, 9, "blob"]

console.log(fruitsArray)

console.log(fruitsArray[0])    // den første verdien i et array er 0 (0,1,2,3-----)

