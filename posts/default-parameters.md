---
title: 'Default Parameters'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1611077544066-4522a88996aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

In ES6, we can give default value to function's parameters.

With the old syntax, this is how we create default value to a parameter.
```javascript
// traditional
var sayGoodbye = function (name) {
  name = name !== undefined ? name : ‘Lorem Ipsum’;
  return `Bye bye ${name}`
}
```

Now, let's refactor using ES6 default parameter!
```javascript
// es6
const sayGoodbye = (name = ‘Lorem Ipsum’ ) => `Bye bye ${name}`
console.log(sayGoodbye()); // Bye bye Lorem Ipsum
console.log(sayGoodbye(‘Bambang’)); // Bye bye Bambang
```

It's so simple and easy to understand. This also helps you to handle error in advance when you forget to assign the parameter.