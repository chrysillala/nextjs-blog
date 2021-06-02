---
title: 'Destructuring Assignment'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1590845947667-381579052389?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

Destructuring assignment allows us to unpack values from array and properties from object into variables.

## Array
This is how we destructure an array into variables.
```javascript
const menu = ['chicken', 'beef'];
const [menu1, menu2] = menu;

console.log(menu1); // chicken
console.log(menu2); // beef
```

We can also use destructuring assignment to swap between two values in array.

Here's how we swap array using traditional syntax.
```javascript
// traditional
var swap = function() {
  var arr = [1,2];
  var temp;
  temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;

  return arr;
}
console.log(swap()); // [2,1]
```

And now, let's refactor the code using destructuring assignment!
```javascript
//es6
let [a,b] = [1, 2];
[b,a] = [a,b];
console.log(a, b); // [2,1]
```

We have less code and it's easier to understand, isn't it?



## Object
We can also use destructuring assignment with object. Take a look at the example below.

Here's how we do it with traditional syntax to get the object's value.
```javascript
// traditional
var car = {
  model: 'Toyota',
  year: 2015,
  colors: ['black', 'blue', 'yellow']
}

var model = car.model;
var year = car.year;
var colors = car.colors;

console.log(model);
console.log(year);
console.log(colors);
```

Now let's refactor with destructuring assignment!
```javascript
// es6
const car = {
  model: 'Toyota',
  year: 2015,
  colors: ['black', 'blue', 'yellow']
}

let {model, year, colors} = car;
console.log(model);
console.log(year);
console.log(colors);
```
There's a lot more you can do with destructuring assignment as it is really useful and practical, especially when you are working with modern Javascript.