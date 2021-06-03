---
title: 'Arrow Functions'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1600493572882-f098876ce680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

Let's begin by showing you how to write function in traditional syntax vs ES6 syntax.

```javascript
// traditional
var sum = function (a, b) {
  return a + b;
}

// es6
const sum = (a, b) => a + b;
```

It's really awesome, right?
The arrow function makes your code looks clean, more structured and more readable.

When the body inside arrow function has more than one line, we need to wrap it inside `{}`.
```javascript
const sum = (a, b) => {
  const result = a + b;
  return result;
}
```

Arrow function commonly used as callbacks. You will find it a lot when working with `map()`, `filter()` and `reduce()`.

```javascript
// traditional
const arr1 = [1,3,5];
const square1 = arr1.map(function(item) {
  return item ** 2;
});
console.log(square1); // [1, 9, 25]


// es6
const arr2 = [1,3,5];
const square2 = arr2.map(item => item ** 2);
console.log(square2);
```

Although it is a powerful addition in ES6 but there are limitations that we need to understand to avoid errors that are difficult to track, such as when using `this` inside arrow function.

On the `car2` example, the result might be something that you are not looking for. So, we need to be careful when using arrow function. This happens because arrow function doesn’t have its own bindings to `this`, instead they *inherit from parent scope*, which is called **lexical scoping**.

```javascript
// with regular function
const car1 = {
  brand: 'Toyota',
  showBrand: function() {
    console.log(this.brand);
  }
}
car1.showBrand(); // 'Toyota'


// with arrow function
const car2 = {
  brand: 'Mazda',
  showBrand: () => console.log(this.brand)
}
car2.showBrand(); // undefined
```

