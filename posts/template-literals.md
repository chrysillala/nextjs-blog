---
title: 'Template Literals'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

Template literals or template strings is a new way to concatenate strings in ES6.
Let's take a look at code example below.

This is how we create greetings function that will greet the given name in traditional syntax.
```javascript
// traditional
var greetings = function (name) {
  return 'Hello ' +  name;
};
console.log(greetings('Bambang')); // 'hello Bambang'
```

Now, let's refactor to template literals!
```javascript
// es6
const greetings = (name) => `hello ${name}`;
console.log(greetings('Bambang')); // 'hello Bambang'
```

With template literals, our code looks more structured. We don't need the `+` sign anymore and we can use `${}` to call variables.

