/**
 * print this pattern
 *        1
 *        1 2
 *        1 2 3
 *        1 2 3 4
 *        1 2 3 4 5
 *
 *  but in reverse
 */


for( let i = 5 ; i > 0 ; i--){
    let result = ""
   for ( let j = 5 ; j > i+1 ; j--){
     result = result.toString() + (j + 1)
   }
   console.log(result)
}
