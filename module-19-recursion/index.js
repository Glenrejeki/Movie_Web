// Recursion -> Sebuah function memanggil dirinya sendiri dimana terdapat base case, supaya bisa menghentikan rekusi.

function faktorial(n){
  if (n===0){
    return 1
  }
  return n * faktorial(n-1)
}

console.log(faktorial(5))