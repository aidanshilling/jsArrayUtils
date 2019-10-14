function printReverse(arry) {
//Prints a given array in reverse order to console
    var length = arry.length;
    for(var i = length; i >= 0; i--) {
        console.log(arry[i]);
    }
}

function isUniform(arry) {
//Returns if given array is uniform (all values are the same)
    var itemOne = arry[0];
    for(var i = 0; i < arry.length; i++) {
        if(itemOne !== arry[count]) {
            console.log("Failed on index: " + count);
            return false
        }
    }
    return true;
}

function sumArray(arry) {
//Sums all the values in a given array
    var sum = 0;
    arry.forEach(function(item){
        sum += item;
    });
    return sum;
}

function max(arry) {
//Returns maximum value in a given array
    var max = 0;
    arry.forEach(function(item){
        if (item > max) {
            max = item;
        }
    });
    return max;
}