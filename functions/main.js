//practice
// const greet = function(name, timeOfDay) {
//     console.log(`Good ${timeOfDay}, ${name}`)
// }
// // const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]
// // for(let n of names) {
// //     greet(n)
// // }
// let time = 2
// let me = "Debbie"
// if(time == 1){
//     greet(me, "morning")
// }
// if(time == 2){
//     greet(me, "afternoon")
// }

// spot check 1
// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log(`I like ${food}.`)
//     }
//   }
//   person.speak("stuffed cabbage")

//exercise 1
// const calcAge = function(year , birthYear){
//     return year - birthYear
// }
// const age = calcAge(2020, 1989)

//exercise 2 
// const calcAge = function(year , birthYear){
//     return [year - birthYear , year - birthYear - 1]
// }
// const age = calcAge(2020, 1989)
// console.log(`You are either ${age[0]} or ${age[1]}.`)

// exercise 3 - 4
// const isEven = function(number){
//     return !(number % 2)
// }
// const printOdd = function(numbers){
//     for(n of numbers){
//         if(!isEven(n)){
//             console.log(n)
//         }
//     }
// }
// const num = [1 , 2 , 7 , 9, 10 , 4]
// printOdd(num)

// const containsNum = function(integers, x){
//     for(i of integers){
//         if(i == x){
//             return true
//         } else 
//         {
//             return false
//         }
//     }
// }
// right = containsNum([1 , 2 , 7 , 9, 10 , 4], 90)
// console.log(right)
//  console.log(containsNum([1 , 2 , 7 , 9, 10 , 4], 1)) 
// can I console.log a function?

//exercise 6
// const calculator = {
//     add: function (x , y) {
//         return x + y
//     },
//     subtract: function (a , b) {
//         return a - b
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2))

//exercise 7
const increaseByNameLength = function (money, x) {
    return money * x.length
}
const makeRegal = function (name) {
    return ("Her Royal Highness, " + name)
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"