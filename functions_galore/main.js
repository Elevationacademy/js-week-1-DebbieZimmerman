people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  const capitalizeFirst = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); 
    capitalizedStr += str.slice(1) 
    return capitalizedStr
  } //is there a faster way to do this, whenever I try it goes wrong

function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}; //did you expect us to be able to capitalize a whole string otherwise?
  
const getAge = function(age){
    if(age < 21){
        age = "an underage"
    } else if(age > 55){
        age = "a 55+"
    } else {
        age += " year old"
    }
    return age
}

const getLoc = function(city, country){
    return `${capitalize(city)}, ${capitalize(country)}`
}

const getCatchphrase = function(person, catchphrase){
    let quote = ""
    quote += capitalizeFirst(person)
    quote += ' loves to say "'
    quote += capitalizeFirst(catchphrase)
    quote += '"'
    return quote
    // return `${capitalize(person) loves to say ${capitalize(catchphrase)}.`
    //why can't i do this?
}


const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` 
    summary += `${capitalize(person.profession)} `
    summary += `from ${getLoc(person.city, person.country)}. `
    summary += `${getCatchphrase(person.name, person.catchphrase)}.`
    return summary
  }

  console.log(getSummary(people_info[2]))