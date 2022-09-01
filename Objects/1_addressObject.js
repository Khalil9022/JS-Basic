let address = {
    street : 'Parupuk Tabing',
    city : 'Padang',
    zipcode : '12345'
}

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address)