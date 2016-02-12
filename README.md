### BAD_CRYPTO_ALERT!!!!
I make no promises that this is actually random.
It uses the internal node `randomBytes` function, for what its worth.
Use at your own risk

#### CL Rando
This is a module you can use like this:

```
var rando = requre('cl-rando')

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

primes.sort(rando)

primes =>
    [ 59, 31, 37, 89, 73, 43, 2, 17, 5, 83, 67, 23, 53, 71, 61, 79, 47, 13, 19, 7, 3, 97, 41, 29, 11 ]

```

### General Notes on JS `sort()`

As you might have inferred from the example above, one of the neat things about the Javascript `sort()` function is that you can pass it a callback to define any
kind of sort order. The sort function sorts based on the return value of the callback. For example To sort an array of numbers in order you might do:

```
numbersArray.sort( function order (a, b) {
  return a - b
})
```
If the first call was `order(100, 40)` `sort` would get `60`, which is positive and therefore `a` has a higher
index than `b` and therefore comes after.
Converseley `order(40, 100)` returns a negative number, indicating that `a` has a lower index and goes before
`b`
