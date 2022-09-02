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

// localGlobalScope()

//--------------Let vs Var ---------------------
function letVar(){
    function start(){
        //var => function-scoped 
        //let, const => block-scoped

        for(var i =0; i<5; i++){
            if (true){
                var color = 'red'
            }
        }
        //using Var will accesible for i in line 119
        console.log(color);
    }

    start()
}
// letVar()


//----------------This Keyword------------------
//method -> obj
// function -> global (window, global)

function thisKeyword(){
    const video = {
        title : 'a',
        tags : ['a','b','c'],
        showTags(){
            this.tags.forEach(function(tag){
                console.log(this.title,tag);
            },this)
        }
    }
    
    video.showTags()

    function playVideo(title){
        this.title = title 
        console.log(this);
    }

    // const v = new playVideo('b') // {}
}
// thisKeyword()

//-------------Changing This--------------------
function changeThis(){
    //Solution 1 
    const video = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            const self = this
            this.tags.forEach(function (tag) {
                console.log(self.title, tag);
            })
        }
    }

    // video.showTags()

    //Solution 2
    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            this.tags.forEach(tag =>{
                console.log(this.title, tag);
            })
        }
    }

    video2.showTags()


    function playVideo(a,b){
        console.log(this);
    }

    playVideo.call({ name : 'Khalil'},1,2) // like usual
    playVideo.apply({ name : 'Khalil'}, [1,2]) //using array
    playVideo.bind({ name : 'Khalil'})
    
    // playVideo()
}

changeThis()