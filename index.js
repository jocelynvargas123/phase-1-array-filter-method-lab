const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    return array.filter(driver => driver.toLowerCase() == name.toLowerCase())
}


function fuzzyMatch(array, letters) {
    return array.filter(driver => driver.startsWith(letters))
}

function matchName(array, property){
    return array.filter(array => array.name === property)
}