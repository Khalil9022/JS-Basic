// console.log(sum([1, 2, 3, 4]));
console.log(Array.isArray([1]));


function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items];

    return items.reduce((a, b) => a + b);
}

