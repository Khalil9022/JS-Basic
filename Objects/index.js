
//contoh object : 
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {
        console.log('draw');
    }
};

// circle.color = "yellow"
// console.log(circle);
// delete circle.color
// console.log(circle);

//circle.draw()

// Factory Function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        },
    };
}

// const circle1 = createCircle(1)
// console.log(circle1);

// const circle2 = createCircle(2)
// console.log(circle2);

//constructor function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
    return this
}

// const circle3 = new Circle(1)
// console.log(circle3);

Circle.call({},1)
