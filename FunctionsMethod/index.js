//--------------Arguments--------------
function sum(){
    let total = 0
    for(let value of arguments)
        total+=value
    
    return total
}

// console.log(sum(1,2,3,4,5));

//--------------The Rest Operator---------------
function sum2(discount, ...args){
    const total =  args.reduce((a,b) => a+b)

    return total * (1-discount)
}

// console.log(sum2(0.1, 1,2,3,4,5,6,10));


//---------------Default Parameters---------------
function interest(principal,rate = 3.5,years = 5){ //default parameter solution 1
    // Default Parameterse Solution 2 
    // rate = rate || 3.5
    // years = years || 5

    return principal * rate / 100 * years
}

// console.log(interest(10000,3.5,5)); // can delete the 2 last arrays for testing defaults years

//---------------Getter and Setter-----------------
function getterSetter(){
    const person = {
        firstName: 'Khalil',
        lastName : 'Attalla',
        get fullName (){
            return `${person.firstName} ${person.lastName}`
        },
        set fullName(value) {
            const parts = value.split(' ')
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
    }

    person.fullName = 'Jhon Smith' //setter
    
    //getters => access properties
    //setters => change(mutate) them

    console.log(person);
}

// getterSetter()

//-----------Try Catch---------------
function tryCatch(){
    const person = {
        firstName: 'Khalil',
        lastName: 'Attalla',
        get fullName() {
            return `${person.firstName} ${person.lastName}`
        },
        set fullName(value) {
            if(typeof value !== 'string')
                throw new Error('Value is not a String') // throw and exception 

            const parts = value.split(' ')
            if(parts.length !==2)
                throw new Error('Enter a first and last name dude') // throw and exception
            
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
    }

    try{
        person.fullName = ''
    }
    catch(e){
        console.log(e);
    }

    console.log(person);
}

// tryCatch()


//-----------------Local vs Global Scope----------------
function localGlobalScope(){
    const color = 'red' //Global
    function start(){
        const message = "hi" //Local
        const color = 'blue'
        console.log(color); //local
    }

    function stop(){
        const message = 'bye' //Local
        console.log(message);
    }
    
    start()
    stop()
}

localGlobalScope()