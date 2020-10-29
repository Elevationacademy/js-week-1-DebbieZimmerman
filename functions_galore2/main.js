const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]

const prepText = function(text){
    text = text.toLowerCase() //lower case
    for(i of specialChars){
        text = text.split(i).join(" ") //removes special characters
    }
    text = text.split("  ").join(" ")
    text = text.split("   ").join(" ")
    text = text.split(" ")
    return text
}
//    //go through text
//    const convertArrayToObject = function(text, key){
//     const initialValue = {};
//     return text.reduce((obj, item) => {
//       return {
//         ...obj,
//         [item[key]]: item,
//       };
//     }, initialValue);
//     console.log(initialValue)
//   };
//   convertArrayToObject(text)
 

const wordCounts = function(text) {
      
      text = prepText(text)
      let list = {}
      for (i of text){
          list[i] = 0
          for(x of text){
              if(i == x){
                list[i] ++
      } 
    }
  }
      console.log(list)
}
wordCounts(story)