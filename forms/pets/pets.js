let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(petNames)

let withSal = petNames
let newPet = "Sal"
withSal.push(newPet)
console.log(withSal)

petNames.push(newPet)
console.log(petNames)

console.log(`The third pet is named ${petNames[2]}.`)

let petNamesLength = petNames.length
console.log(`The array has ${petNamesLength} names in it.`)

petNames.pop()
console.log(petNames)
