---
title: 'Rest Parameters and Spread Syntax'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1589722138742-45fa6ad9fc19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

Previously, before we have rest parameter, we can code like this to convert arguments to array. However, it only supports limited number of arguments and you need to be sure how many items are there.

```javascript
// traditional
var cities = function(city1, city2, city3, city4, city5) {
  var citiesToArray = Array.from(arguments);
  return citiesToArray;
}
console.log(cities('tokyo', 'singapore', 'jakarta', 'moscow', 'frankfurt')); // ['tokyo', 'singapore', 'jakarta', 'moscow', 'frankfurt']
```

But now, thanks to ES6 which introduces us to Rest parameter.

Rest parameter accepts unlimited arguments and returns it as array. You can use rest parameter by adding three dots `...`. When you use rest paramater as argument inside a function, it must be at the end.

```javascript
// es6
const cities = (city1, city2, ...others) => {
  console.log(city1); // 'tokyo'
  console.log(city2); // 'singapore'
  console.log(others); // ['jakarta', 'moscow', 'frankfurt']
}
cities('tokyo', 'singapore', 'jakarta', 'moscow', 'frankfurt');
```
Because it turns our parameters into an array, we can combine it with `map()` just like the example below.

```javascript
const doubleTheNumbers = (...args) => args.map(item => item * 2)
console.log(doubleTheNumbers(3,5,20)); // [6, 10, 40]
```



Next we have spread syntax `...`, which looks exactly the same as rest parameter.
However, spread syntax does quite the opposite of rest parameter. With spread syntax we can get list of arguments from array.


For example, let's say we have an array and we want to find the lowest number. Here's how we can do that with spread syntax.
```javascript
const arr = [6, 5, 8, 2, 9];
console.log(Math.min(...arr)); // 2
```

Besides that, we can easily push elements into array using spread syntax. Without spread syntax, it would be something like this, which might be not what we are looking for..
```javascript
// traditional
const fruit1 = ['apple', 'mango'];
const fruit2 = ['strawberry', 'grape', 'melon'];
fruit1.push(fruit2)
console.log(fruit1); // ["apple", "mango", Array ["strawberry", "grape", "melon"]]
```
Now, let's refactor with spread syntax!
```javascript
// es6
const fruit1 = ['apple', 'mango'];
const fruit2 = ['strawberry', 'grape', 'melon'];
fruit1.push(...fruit2);
console.log(fruit1); // ["apple", "mango", "strawberry", "grape", "melon"]
```

We can copy an array using spread syntax too!
```javascript
// copy array
let nums = [3, 7, 5, 6];
let copyNums = [...nums];
copyNums.push(9);
console.log(nums); // [3, 7, 5, 6]
console.log(copyNums); // [3, 7, 5, 6, 9]
```

Both rest parameter and spread syntax are really useful, powerful and easy to understand!
