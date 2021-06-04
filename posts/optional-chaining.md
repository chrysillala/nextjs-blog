---
title: 'Optional Chaining'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1606926730770-218d179a690e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

To use optional chaining you will need an Object. This operator can access nested Object properties and it will return `undefined` if the property doesn’t exist (undefined or null).

With optional chaining, we **don’t need to manually check** if each property is valid.

Here, we want to check several properties in `menu` Object.

```javascript
const menu = {
  breakfast: 'nasi goreng',
  lunch: ['ayam goreng', 'pecel', 'es teh tawar'],
  snacks: {
    one: 'chiki',
    two: 'kopi kenangan'
  },
  countPrice() {
    return 'total 57000';
  }
}

console.log('dinner:', menu?.dinner); // "dinner:" undefined
console.log('snack 2:', menu?.snacks?.two); // "snack 2:" "kopi kenangan"
console.log(menu.countPrice?.()); // "total 57000"
```

Optional chaining is usually combined with [Nullish Coalescing](/posts/nullish-coalescing).

*Optional Chaining is a new feature in ES2020.*