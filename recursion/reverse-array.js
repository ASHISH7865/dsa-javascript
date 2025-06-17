function reverseRecursion(arr){
    if(arr.length ===1 || arr.length === 0 ){
        return arr
    }

    const resetReversed = reverseRecursion(arr.slice(1))
    return [...resetReversed , arr[0]]
}


let reversedArr = []
function reverse(arr){
   if(arr.length === 0 ){
        return
    }

     reverse(arr.slice(1))
     reversedArr.push(arr[0])

}


reverse([1,2,3,4,5,6,7])

console.log(reversedArr)
