console.log(sum(10));

function sum(limit) {
    count = 0;
    
    for(let i = 0; i<=limit; i++){
        if(i % 3 === 0) count +=i
        if(i % 5 === 0) count +=i
    }
    return count;
}