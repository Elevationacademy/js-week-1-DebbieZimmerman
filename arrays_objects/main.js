// const myStuff = ["nuts" , "grapes" , "water"]
// console.log(myStuff)
// // myStuff.unshift(myStuff[myStuff.length - 1])
// // myStuff.push(myStuff[1])
// // console.log(myStuff)
// myStuff.push(...myStuff)
// console.log(myStuff)
// let doubledStuff = myStuff.splice(3)
// console.log(doubledStuff)

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// let newGenes 
// newGenes = [genes[0] , genes[1]]
// console.log(newGenes)
// newGenes.push(genes[genes.length - 1] , genes[genes.length - 2] , genes[genes.length - 3])
// let removedGene = newGenes.splice(3, 1)
// newGenes.push(...removedGene)
// newGenes.push(...removedGene)
// newGenes.unshift("FXT")

// console.log(newGenes)


// let car = {
//     color: "purple" ,
//     numOfWheels: 4 ,
//     isFancy: false ,
// }
// console.log('The ' + car.color + " car has " + car.numOfWheels + " wheels. ") 

// if(car.isFancy) {
//     console.log("It is fancy.")
// } else {
//    console.log("It is not fancy.")
// }

//exercise1
// const p1 = {
//     name: "Steve",
//     age: 30,
//     city: "Eden"
// }
// const p2 = {
//     name: "Adam",
//     age: 30,
//     city: "Eden"
// }
// if(p1.age == p2.age) {
//     if(p1.city == p2.city) {
//         console.log(p2.name + " wanted to date " + p1.name + ".")
//     } else {
//         console.log(p2.name + " wanted to date " + p1.name + ", but couldn't.")
//     }
// }

// //exercise 2
// const myList = ["eggs" , "milk"]
// console.log(myList)
// myList.splice(0 , 1 , "L eggs")
// console.log(myList)
// myList.splice(1)
// console.log(myList)

// //exercise 3
// const cleaningSupplies = ["windex" , "mop"]
// console.log(cleaningSupplies)
// myList.push(...cleaningSupplies)
// console.log(myList)

// //exercise 4
// const library = {
//     books: [
//         {title: "The Magicians" , author: "Lev Grossman"},
//         {title: "Neverwhere" , author: "Neil Gaiman"},
//         {title: "Wizard of Earthsea" , author: "Ursula K Le Guin"}
//     ]
// }
// myList.push(...library.books)
// console.log(myList)

//exercise 5
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//   const name = prompt('Please enter the name for your reservation');
 
// if(reservations[name]) {
//     if(!(reservations[name].claimed)) {
//         console.log("Welcome " + name)
//     } else {
//       console.log("Hmm, someone already claimed this reservation.")
//      } 
//  } else {
//      console.log("You do not have a reservation")
//}

//exercise 5.1
// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation');

// if(reservations[name]) {
//   if(!(reservations[name].claimed)) {
//       console.log("Welcome " + name)
//   } else {
//     console.log("Hmm, someone already claimed this reservation.")
//    } 
// } else {
//    console.log("I will make you a reservation " + name + ".")
//    reservations[name] = {claimed: true}
//    console.log(reservations)
// }
 
//  exercise 5.2
// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }

// let name = prompt('Please enter the name for your reservation');
// name = name.toLowerCase()
// name = name[0].toUpperCase() + name.substring(1)

// if(reservations[name]) {
//   if(!(reservations[name].claimed)) {
//       console.log("Welcome " + name + ". I see you have a reservation.")
//   } else {
//     console.log("Hmm, someone already claimed this reservation.")
//    } 
// } else {
//    console.log("I will make you a reservation " + name + ".")
//    reservations[name] = {claimed: true}
//    console.log(reservations)
// }

// exercise extensions
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
let x = 1
let daysGoneBad = date - kitchen.fridge.items[x].expiryDate
let payFix = kitchen.fridge.price / 2

if(kitchen.hasOven) {
  if(kitchen.fridge.works) {
  console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the " + kitchen.fridge.items[x].name +" in.")
} else {
  console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the " + kitchen.fridge.items[x].name +" in. And she'll have to pay " + payFix + " to fix the fridge.")
} } else {
  if(kitchen.fridge.works) {
    console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[x].name +" in.")
  } else {
    console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[x].name +" in. And she'll have to pay " + payFix + " to fix the fridge.")
  } 
}

  

// if(kitchen.hasOven && kitchen.fridge.works) {
//   console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the " + kitchen.fridge.items[x].name +" in.")
// } else if(!kitchen.hasOven && kitchen.fridge.works) {
//   console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[x].name +" in.")
// } else if(kitchen.hasOven && !kitchen.fridge.works) {
//   console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the " + kitchen.fridge.items[x].name +" in. And she'll have to pay " + payFix + " to fix the fridge.")
// } else if(!kitchen.hasOven && !kitchen.fridge.works) {
//   console.log(kitchen.owner + "'s " + kitchen.fridge.items[x].name + " expired " + daysGoneBad  + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[x].name +" in. And she'll have to pay " + payFix + " to fix the fridge.")
// } 