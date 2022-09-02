const numbers = [1,10,4,3]

const max = getMax(numbers)

console.log(max);

function getMax(array) {
    if(array.length === 0 ) return undefined

    //  let max = array[0]

    //  for(let i =1 ; i<array.length; i++){
    //     if (array[i]> max)
    //         max = array[i]
    //  }
    //  return max 

    //Using Reduce function 
    return array.reduce((accumulator, current)=> {
        return (current > accumulator) ? current : accumulator
    })
}