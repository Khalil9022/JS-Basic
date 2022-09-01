const output = fizzbuzz(15)
console.log(output);

function fizzbuzz(input){
    if (typeof input !== 'number') return NaN

    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz' 

    if (input % 3 === 0) return 'Fizz'

    if (input % 5 === 0) return 'Buzz'
}