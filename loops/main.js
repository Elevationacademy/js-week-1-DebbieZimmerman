// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// // companyIndex is a string that holds the index numbers as it does through
// for(let companyIndex in companies){
//        console.log(companies[companyIndex])
//      }
// // company holds the element itself, and not it's index value
// for(let company of companies){
//     console.log(`One day I will work at ${company}`)
// }

// //exercise 1
// let names = ["Avi" , "Benji" , "Debbie"]
// let ages = [ 5, 4, 3]
// for(let i in names){
// console.log(`${names[i]} is ${ages[i]} years old.`)
// }

// //exercise 2
// let numbers = [1 , 2 , 3 , 4]
// let sum = 0
// for(let i of numbers) {
//   sum += i
// }
// // exercise 3
// let average = sum / numbers.length

// // exercise 4
// let nums = []
// let i = 0
// while(i < 100){
//   i ++
//   nums.push(i)
// }

//exercise 5
// i = 0
// while(i < 100){
//   console.log(nums[i])
//   i +=2
// }
// OR
// for(let x of nums){
//     if(nums[x-1] % 2 == 1){
//     console.log(nums[x-1])
//   } 
// }

//exercise 6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// let indexNum 
// let x = 0
// while(!(indexNum)){
//   if(nums[x] == 709){
//     indexNum = x
//   } else{
//     x ++
//   }
// } 
// console.log(`${indexNum} is the index of number 709!`)

//exercise 7
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(let i in names){
//   people.push({name: names[i] , age: ages[i]})
// }
// console.log(people)

// //exercise 8
// for(let x in people){
//   console.log(`${people[x].name} is ${people[x].age} years old.`)
// }

//exercise 8
// const posts = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]
// for(x in posts){
//   if(posts[x].id == 2){
//     posts.splice(x , 1)
//   }
// } console.log(posts)

//exercise 9
// const posts = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []
//   },
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [
//                 {id: 1, text: "Idiot has no idea"}, 
//                 {id: 2, text:"Fool!"}, 
//                 {id: 3, text: "I agree!"}
//               ]
//    },
//    {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []
//    }
// ]
// for(x in posts){
//   if(posts[x].id == 2){
//     for(y in posts[x].comments){
//       if(posts[x].comments[y].id == 3){
//         posts[x].comments.splice(y , 1)
//         console.log(posts[x].comments)
//   }}}}
  
//extension
const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}
for(i in dictionary){
  console.log(`Words that start with ${i}:`)
  for(x in dictionary[i]){
    console.log(dictionary[i][x])
  }
  
}
