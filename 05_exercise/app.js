const getFirstValue = function (array){
    array = array.sort();
    return array[array.length-1];


}   
 var y = ["Monday","Thursday","Saturday","Wednesday","Tuesday"]
x = getFirstValue(y)

console.log(x)
console.log(y)