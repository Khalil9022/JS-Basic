
const circle = {
    radius: 2, 
    get area(){
        return Math.PI * this.radius * this.radius
    }
}

circle.area= 20 //doesnt change

console.log(circle.area);