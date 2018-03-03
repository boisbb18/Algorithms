let productArr = function(arr) {
    var multiply = 1;
    let array = [];
    for(var i = 0; i < arr.length; i++) {
      array[i] = multiply;
      multiply *= arr[i];
    }

    multiply = 1;
    for (var i = arr.length - 1; i>= 0; i--) {
      array[i] *= multiply;
      multiply *= arr[i];
    }
    return array
}

console.log(productArr([1,7,3,4]));