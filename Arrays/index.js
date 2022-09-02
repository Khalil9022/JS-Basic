const number = [3,4]

//Push at End array
number.push(5,6)

// console.log(number);

//Push Begining array
number.unshift(1,2)

// console.log(number);

//Middle
number.splice(2,0,'a','b')
// console.log(number);

const courses = [
    {id : 1, name:'a'},
    {id:2,name:'b'}
]

// const course = courses.find(function (course) {
//     return course.name === 'a'
// })

const course = courses.find(course => course.name === 'a')

//console.log(course);

//-----------Remove ELEMENT in ARRAY----------------
const number2 = [1,2,3,4]

//End
// const last = number2.pop()
//Beginning
// const first = number2.shift()
//Middle 
number2.splice(2,1)
// console.log(number2);

//-----------Emptying An Array-----------
let number3 = [1,2,3,4]
let another = number3

//solution1 jika tidak ada referensi dari original array, 
//number3 = []

//solution 2
//number3.length =0

//solution 3 
number3.splice(0,number3.length)

//solution 4
// while(number3.length>0)
// number3.pop()

// console.log(number3);
// console.log(another);

//-------------Combine and Slice Array---------------
let first = [1,2,3,4]
let second = [4,5,6]

let combined = first.concat(second)

let slice = combined.slice(2,4)

// console.log(combined);
// console.log(slice);

//------------------The Spread Operator----------------
let firstarray = [1, 2, 3, 4]
let secondarray = [4, 5, 6]

let combinedarray = [...first,'a', ...second,'b']

// console.log(combinedarray);

//-------------------Iteration an Array-------------------
function iterationArray(){
    const number4 = [1, 2, 3]

    for (let number of number4)
        console.log(number);

    number4.forEach(function(number,index){
        return console.log("index ke : "+ index + " = "+number);
    })
}
// iterationArray()

//------------------Joining Array-----------------
const number5 = [1,2,3]
const joined = number5.join(',')
// console.log(joined);

const message1 = "this is my first message"
const parts = message1.split(' ')
// console.log(parts);


//------------------Sorting Array--------------------
function sortingArray(){
    const number6 = [2, 3, 1, 8, 6]
    number6.sort()
    console.log(number6);

    number6.reverse()
    console.log(number6);

    const courses1 = [
        { id: 1, name: 'Node.js' },
        { id: 2, name: 'Javascript' }
    ]

    courses1.sort(function (a, b) {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        if (nameA.name < nameB.name) return -1
        if (nameA.name > nameB.name) return 1
        return 0
    })

    console.log(courses1);
}


//-----------------------Testing Element of an Array--------------------
function testingElement(){
    const number7 = [1,2,3,-1]
    
    const atLeastOnePositive = number7.every(function(value){
        return value >= 0
    })

    const atLeastOnePositive2 = number7.some(function(value) {
        return value>= 0
    })

    console.log(atLeastOnePositive2);
}

// testingElement()


//-------------FILTER ARRAY-------------------
function filterArray(){
    const angka = [1,-1,2,3]

    const filtered = angka.filter(value => value >= 0)

    console.log(filtered);
}

// filterArray()

//--------------MAPPING ARRAY--------------
function mapArray(){
    const angka = [1,-1,2,3]

    const filtered = angka.filter(n=> n>=0)

    const item = filtered.map(n => '<li>' + n + '</li>')

    const item2 = filtered.map(n=> ({value :n}))

    const html = '<ul>' + item.join('') + '</ul>'
    console.log(item2);

}

// mapArray()

//---------------Reducing an Array--------------
function reduceArray(){
    const angka = [1,-1,2,3]

    // let sum = 0
    //Solution 1
    // for (let n of angka){
    //     sum += n
    // }

    //Solution 2
    let sum = angka.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })

    console.log(sum)
}
reduceArray()

