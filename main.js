let cars = ['Ford', 'Chevy', 'Toyota', 'Audi']
console.log(`The length of the cars array is ${cars.length}`)

let moreCars = ['Tesla', 'Acura', 'Porche', 'BMW']
let totalCars = cars.concat(moreCars)
console.log(`This is the list of total cars: ${totalCars}`)

console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))