Array.prototype.printReverse = function() {
//Prints a given array in reverse order to console
    var length = this.length;
    for(var i = length; i >= 0; i--) {
        console.log(this[i]);
    }
}

Array.prototype.isUniform = function() {
//Returns if given array is uniform (all values are the same)
    var itemOne = this[0];
    for(var i = 0; i < this.length; i++) {
        if(itemOne !== this[count]) {
            console.log("Failed on index: " + count);
            return false
        }
    }
    return true;
}

Array.prototype.sumArray = function() {
//Sums all the values in a given array
    var sum = 0;
    this.forEach(function(item){
        sum += item;
    });
    return sum;
}

Array.prototype.max = function() {
//Returns maximum value in a given array
    var max = 0;
    this.forEach(function(item){
        if (item > max) {
            max = item;
        }
    });
    return max;
}

Array.prototype.insert = function(item, index) {
//Inserts a value to a certain index in an array and pushed back everything after that index
//Function is kinda useless because splice exists
    var arry = [];
    for(var i = index; i < this.length; i++) {
        arry.push(this[i]);
    }
    this.splice(index);
    this[index] = item;
    for(var i = 0; i < arry.length; i++) {
        this.push(arry[i]);
    }
}