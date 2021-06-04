---
title: 'Nullish Coalescing'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1512425406684-952ff74cb8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1546&q=80'
---

We can provide default values using nullish coalescing when the left-hand expression is null or undefined.

We can also use logical or operator `||` to set default value, however the left-hand expression will evaluate boolean falsy values, such as `0`, `’’`, `null`, `undefined`, `NaN`, `false`, which sometimes can cause unexpected behavior.

For example, we want to create a function that will set the default options for darkmode to true, otherwise it will return the passed options parameter instead.
```javascript
const darkmode = (options) => {
  return options ?? true;
}

console.log(darkmode(false)); // false
```

We can also combine with [optional chaining](/posts/optional-chaining). In this example, we would like to check if the `lang` property inside the `post` Object is available, if it doesn't we will set the default `lang` to `en`
```javascript
const post = {
  category: 'technology',
  author: 'Bambang',
  details: {
    title: 'What is Javascript?',
    date: '2021-01-01'
  }
};

console.log(post?.details?.lang ?? 'en');
```

It's really powerful and we have so much to explore.

*Nullish Coalescing is a new feature in ES2020.*
