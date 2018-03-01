

function split(wholeArray) {
    var midpoint = Math.floor(wholeArray.length/2);
    var firstHalf = wholeArray.slice(0, midpoint);
    var secondHalf = wholeArray.slice(midpoint);
    return [firstHalf, secondHalf];
  }


//console.log(split([3, 5, 67, 4, 32, 8, 9]));

function merge(array) {
  var sorted = [];  
  for(var i = 0; i < array[0].length; i++){
    var num1 = array[0][i];
    var num2 = array[1][i];
    if( num1 < num2){
        sorted.push(num1, num2);
    }else{
        sorted.push(num2, num1);    
    }
  }

  return sorted;
}

console.log(merge([[1, 10, 15, 30], [2, 7, 9, 22]]));