// Write The Function Name FizzBuzz to check the type of parameter and return Fizz if parameter mod 3 equal 0
//  return Buzz if parameter mod 5 equal 0 
// Otherwise  return FizzBuzz if parameter mod 15 equal 0  
 
function FizzBuzz(number){
    if(number%3===0) return "Fizz"
    else if(number%5===0) return "Buzz"
    else if(number%15===0) return "FizzBuzz"
}

console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))


// Otherwise Create Another Function Name FizzBuzzArray 
// to check from the previous  Function 
// that recieve Array 

function FizzBuzzArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]%3 === 0 ? arr[i] = "Fizz":
        arr[i]%5 === 0 ? arr[i] = "Buzz":
        arr[i]%15 === 0 ? arr[i] = "FizzBuzz":null;
    }
    return arr
}


console.log(FizzBuzzArray([2,3,4,5,6,7,8,9,10.15]))
console.log(FizzBuzzArray([2,3,4,5,6,7,8,9,10.15]))