// //exercise1
// const maxCapacity = 14
// let surfTime = true
// let bestStudent
// // const purposeInLife
// console.log(maxCapacity)
// console.log(surfTime)
// console.log(bestStudent)
// // console.log(purposeInLife)

// //exercise2
// let myVariable = "Ice cream"
// myVariable += " is the best thing ever"
// console.log(myVariable)

// //exercise3
// const password = "God"
// const confirmPassword = "god"
// console.log(password == confirmPassword)

// //exercise4
// let product = 423 * 12
// console.log(product)
// let quotient = 802 / 2
// console.log(quotient)
// let result = (5+6) * 3
// console.log(result)

// //exercise5
// console.log((5>2) && false)
// console.log(!("knife" === "sword"))
// console.log((1 < 2) || (-1 > -1) || !false)
// console.log("" == true)
// console.log(31 % 5 == 1)
// console.log(31 % 5 === 1)
// console.log(!!true)
// console.log("5th Avenue" != "5th Avenue")
// console.log((undefined == true) || (null == true))

// //exercise6 a = 0,b = 0, c = 2
// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// if(a == 0 && b == 0 && c == 2) {
//     console.log("you got it right!")
// }

// //if else
// let enoughMoneyInBank = false
// let hasJob = true
// if(enoughMoneyInBank) {
//     console.log("Buy a gift!")
// } else 
//     {if(hasJob) {
//     console.log("Better go to work to buy that gift") 
// } else {
//     console.log("Na Na why don't you get a job.")
// }}


// //if else exercises
// //exercise1
// let numChildren = 5
// let isCareful = false
// if(!(isCareful)) { 
//     numChildren ++
// }
// console.log(numChildren)

// //exercise2
// let silverwareCount = 111
// if(silverwareCount % 2) {
//     console.log("Something is missing")
// } else {
//     console.log("All there")
// }

// //exercise3
// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000
// if(performance = "stellar") {
//     console.log(salary += stellarBonus)
// } else if(performance = "good") {
//     console.log(salary += goodBonus)
// }

// //exercise4
// const isVIP = false
// let cash = 500
// if(isVIP || cash > 300) {
//     console.log("Welcome Madame")
// } else {
//     console.log("As if!")}

//exercise5
// 
//exercise6
// const gender = null
// let profession = "business"
// if(!gender) {
//     console.log(profession += "person")
// } else if(gender == "male") {
//     console.log(profession += "man")
// } else if(gender == "female") {
//     console.log(profession += "woman")
// }

// exercise7
let boughtTesla = false
const yearOfTeslaPurchase = 2017
let isUSCitizen = false
let currentYear = 2018
if(boughtTesla) {
    if(isUSCitizen) {
        if((currentYear - yearOfTeslaPurchase) >= 4) {
            console.log("Would you like an upgrade?")
        } else {
            console.log("Are you satisfied with your Tesla?")
        } 
        } else {
            console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying a Tesla?")
}