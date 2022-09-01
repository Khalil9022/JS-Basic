checkspeed(130)

function checkspeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }
    let points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
        console.log('Lisence Suspended');
    else
        console.log('Points : ', points);

}