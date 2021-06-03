---
title: 'Let and Const'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1586982469023-9f3e18321fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80'
---


`let`: mutable variables, means we can reassign its value. `let` can be declared without being initialized.

`const`: immutable variables, means we cannot reassign value to `const` variables. `const` must be initialized during declaration.

Both of them are block-scope variables, which means it is only available within the block where the variable is declared.

## Takeaways
It is recommended to use `let` and `const` than using `var`, because when we use `let` and `const` will be hoisted to the top but they are not initialized (unlike `var` that has been initialized with the value of `undefined`) and this helps us to get better error message. Furthermore, we can't iniatialized those variables before we declare them. This is useful to make sure that our variables has been declared before we can use them and this is a good practice in programming.


### Code Examples:
```javascript
// traditional
var x = 5;
y = 8;
var y;

console.log(x); // 5
console.log(y); // 8

// es6
let i = 10;
j = 15;
let j;
console.log(i); //10
console.log(j); // Error: Cannot access 'j' before initialization

const k = 29;
k = 39;
console.log(k); // Error: Assignment to constant variable.

let m;
m = 'hello';

const n;
n = 'goodbye';
console.log(m); // hello
console.log(n); // Error: Missing initializer in const declaration
```