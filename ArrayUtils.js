function printReverse(arry) {
    var length = arry.length;
    for(var i = length; i >= 0; i--) {
        console.log(arry[i]);
    }
}

function isUniform(arry) {
    var count = 1;
    var itemOne = arry[0];

    while(count < arry.length) {
        if(itemOne !== arry[count]) {
            console.log("Failed on index: " + count);
            return false
        }
        count++;
    }
    return true;
}