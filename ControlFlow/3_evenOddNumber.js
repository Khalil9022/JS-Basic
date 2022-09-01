evenOdd(10)

function evenOdd(limit){
    for (let i = 0; i<=limit; i++){
        //cara 1 
        // if(i%2 === 0) console.log(i , "EVEN");
        // else console.log(i, "ODD");

        //cara 2 
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(message);
    }
}