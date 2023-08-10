function getLenght(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}
////////////////////////////////
// let manMax = [1 , 5, 9, 30 , 10, 70 ];
// console.log(Math.max(...manMax));
function maxNum() {
    let count = 0;
    // manMax is a varibale => array
    for (let i = 0; i < manMax.length; i++) {
        count = manMax[i]
    } 
    return count;
}
///////////////////////////////