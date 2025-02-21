function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  } 
  if(a === null || b === null){  
    return 0; // Handle null values gracefully
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,2)); // Output: NaN
console.log(foo(1, 'a')); //Output: NaN