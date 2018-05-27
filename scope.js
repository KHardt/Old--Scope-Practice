/* 
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
//let y = 1

for (let x = 1; x < cookies.length; x++) {
    let currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
*/


/* Conjuring Function
const conjunction = function (firstWord, secondWord) {
    let conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)
*/


/*{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = '<h1>The Mod Squad</h1>'


    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
  
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation 
}
*/


const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        let invalidLocation = true
    }

    if (invalidLocation = true) {
        console.log("This location is invalid")
    }


console.log(`There were ${k} locations displayed`)
}


/*
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    

    const namer = function () {
        const suffix = " the Llama";
        let name = possibleNames[randomizer];
        return name + suffix 
    }
    console.log(namer());
    //namer is actually the function that does something. 
}
llamaNamer() //here we just have to call it because it's a function...
//let nameMaker = llamaNamer()
//console.log(nameMaker);
*/

 