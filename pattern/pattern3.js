/**
 * print this pattern
 *        1
 *        1 2
 *        1 2 3
 *        1 2 3 4
 *        1 2 3 4 5
 *
 */


for( let i = 0 ; i < 5 ; i++){
    let result = ""
   for ( let j = 0 ; j < i+1 ; j++){
     result = result.toString() + (j + 1)
   }
   console.log(result)
}
