// .length()
let cars = ['Ford', 'Chevy', 'Toyota', 'Audi']
console.log(`The length of the cars array is ${cars.length}`)

// .concat()
let moreCars = ['Tesla', 'Acura', 'Porsche', 'Honda']
let totalCars = cars.concat(moreCars)
console.log(`This is the list of total cars: ${totalCars}`)

// .indexOf()
console.log(totalCars.indexOf('Honda'))

// .lastIndexOf()
console.log(totalCars.lastIndexOf('Ford'))


// .join()
// .join method changes string to array
let stringOfCars = totalCars.join('-')
console.log(`stringOfCars: ${stringOfCars}`)

// .split()
// .split method changes array to string

// let arr = stringOfCars.split(`-`)
// console.log(arr)
let carsFromString = stringOfCars.split('-')
console.log(`carsFromString: [${carsFromString}]`)
// console.log('carsFromString', carsFromString)

// .reverse()
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

// .sort()
console.log(carsInReverse.sort())
console.log(carsInReverse.indexOf('Acura')) 

// .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// let reptiles = pets.slice(4, -1)
let reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)
// it is non mutating

// .splice()
let removedReptiles = pets.splice(4, 2, 'hamster')
// pets.splice(4, 0, 'hamster) to not replace any
console.log(removedReptiles)
console.log(pets)


// .pop()
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

// .push()
let addBird = pets.push('bird')
console.log(addBird)
console.log(pets)

// .shift()
let firstElement = pets.shift()
console.log(pets)
console.log(firstElement)

// .unshift()
console.log(pets.unshift('turtle'))
console.log(pets)

// .forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    for(let i = 0; i < arr.length; i++) {
        return arr[index] = num + 2

    }

}


numbers.forEach(addTwo)

console.log(numbers)




    

