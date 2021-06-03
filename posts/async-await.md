---
title: 'Async / Await'
date: '2021-05-21'
active: true
image_url: 'https://images.unsplash.com/photo-1550669873-ac499be3d4aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
---

Promise and Async/await is something that you will hear often and I thought this is one of scariest things in Javascript. Until I understand how it works. By writing this article, I don’t promise (no pun intended) this will be easy to understand but hopefully you might gain something here in understanding Asynchronous Javascript.

Now, let’s move on to the main topic!

Although javascript is a synchronous, blocking, single-threaded language which means it can only run one operation at a time, recently, Javascript has provide us ways to run our code asynchronously. This means we can let our code do several things without blocking the main thread.

Before we jump to the technical concept, we need to understand asynchronous actions first. In simple terms, asynchronous action is an action that we start now and finish later.
In Javascript, we do asynchronous actions when we are doing network requests or fetching data, for example.


## Callback
Now, let's create a simple network request from API using XHR. We also have added callback to make it reusable for handling error message.
```javascript
const getTodo = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // this event is fired when the readyState attribute of a document has changed
    // we will return the callback when it finished and throw and error if it's an unsuccessful request
    if (request.readyState === DONE && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === DONE) {
      // if it's done fetching but error request status is unsuccessful
      // such as typo in request URL
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

console.log("1");
console.log("2");
getTodo("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success:", data);
  }
});
console.log("3");
console.log("4");
console.log("5");
```
Callback is a function that runs after an action is finished. In this example, our callback will give us error message when data fetching is failed or give us the data we requested if it's successful.

### Callback Hell

After we received the response, sometimes we will need to use the data to make another requests.
Now, let's try to chain multiple sequential requests using our code.
```javascript
const getTodo = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // this event is fired when the readyState attribute of a document has changed
    // we will return the callback when it finished and throw and error if it's an unsuccessful request
    if (request.readyState === DONE && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === DONE) {
      // if it's done fetching but error request status is unsuccessful
      // such as typo in request URL
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

// this is how we chain network request
getTodo("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
  console.log("request 1", data);
  getTodo("https://jsonplaceholder.typicode.com/todos/2", (err, data) => {
    console.log("request 2", data);
    getTodo("https://jsonplaceholder.typicode.com/todos/3", (err, data) => {
      console.log("request 3:", data);
    })
  })
});
```

As you can see, our callbacks get really messy, unmaintainable and this is what we call a `callback hell`. However, now we have Promise to the rescue!



## Promise
Let's understand Promise before we can start using async/await.

In Javascript, Promise means doing something that takes time then produces a result, just like real-world promise.

After a Promise takes the time needed to produce the promised result, it will either **resolve** when it’s fulfilled or **reject** when there is an error. If it’s resolved, we can get access to the returned data and if it’s rejected, we can throw an error.

As a good practice, **an asynchronous action should always return a Promise**, that makes it possible to plan actions after it; even if we don’t plan to extend the chain now, we may need it later.

Let's refactor our previous code to make a network request using Promise.

```javascript
const getTodo = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodo("https://jsonplaceholder.typicode.com/todos/1")
  .then(data => {
    console.log("promise resolved:", data);
  }).catch(err => {
    console.log("promise rejected:", err)
  });
```

### Chaining Promises
Now what if we want to create sequential network requests that might have dependencies to the previous response?
The answer is, we can chain our requests!

```javascript
const getTodo = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

console.log('1')
console.log('2')
getTodo("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodo("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log("promised 2 resolved:", data);
    return getTodo("https://jsonplaceholder.typicode.com/todos/3");
  })
  .then(data => {
    console.log("promised 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
console.log('3')
console.log('4')
```

Because `then()` returns a Promise, we can easily chain our requests with another `then()`.

We also have `catch()` that will throw an error for any unsuccessful `then()`, so we don't need to throw an error for each request, which means when the first request return error, it will not go to the second request. The next request will only fire if the previous Promise has been resolved.

## Fetch API
With Fetch API the Promise will get rejected if there is any network error or we can't reach the api for some reason.

When using Fetch, we need to remember 3 things:
1. Fetch the data
1. Then we take the response and returns `response.json()` that returns a Promise
1. Then we can use `then()` to fire a function where we can have access to that data

In this example, we want to refactor our `getTodo` code with Fetch API to create the network request, instead of XHR.
```javascript
const getTodoFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // if there is a typo on the request url, it will still get resolved so we need to check the status
      if (!response.ok) {
        return Promise.reject("there is an error fetching the data");
      }
      console.log("status ok", response);
      return response.json(); // returns a Promise
    })
    .then((data) => {
      console.log("resolved:", data);
    })
    .catch((err) => {
      console.log("rejected:", err);
    });
};
getTodoFetch();
```

### Chaining Promises inside Fetch
Now, how to create sequential network requests?

We can chain our `then()`.

```javascript
const getTodoFetchChain = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("promised 1 resolved:", data);
      return fetch("https://jsonplaceholder.typicode.com/posts/2");
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("promised 2 resolved:", data);
      return fetch("https://jsonplaceholder.typicode.com/posts/3");
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("promised 3 resolved:", data);
    })
    .catch((err) => {
      console.log("promise rejected:", err);
    });
};
console.log("1");
console.log("2");
getTodoFetchChain();
console.log("3");
console.log("4");
```

Hmmm, as the chain goes longer, it looks like there are to much repetitive code!
Thanks to async/await, we can refactor our code to make it DRY.


## Async/await

Finally, we have reached the long awaited part.
First, let me remind you the concept of asynchronous, which is start now finish later.
Now, we will create a async/await request using Fetch.

```javascript
const getTodoAsyncAwait = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();

  if (!response.ok) {
    // we can throw error using Error object, so it will rejected by the Promise
    // and pass our error message
    throw new Error("cannot fetch data");
  }

  return data;
};
getTodoAsyncAwait("https://jsonplaceholder.typicode.com/todos/1")
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));
```

Any function with the `async` keyword will return a Promise. Inside an async function, there is no need to do `then()`.

Because we put await inside async function, it will not render-block the whole app. It just blocked inside its own async function code block.


### Chaining Promises with Async/await
Then, how do we chain Promises using async/await?

We can use `then()`. Remember what I mentioned previously:
> Any function with the `async` keyword will return a Promise.

Because async returns a Promise, we can chain our request using `then()`.

```javascript
const getTodoAsyncAwait = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();

  if (!response.ok) {
    // we can throw error using Error object, so it will rejected by the Promise
    // and pass our error message
    throw new Error("cannot fetch data");
  }

  return data;
};
console.log("1");
console.log("2");
getTodoAsyncAwait("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("resolved 1:", data);
    return getTodoAsyncAwait("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log("resolved 2:", data);
    return getTodoAsyncAwait("https://jsonplaceholder.typicode.com/todos/3");
  })
  .then((data) => console.log("resolved 3:", data))
  .catch((err) => console.log("rejected:", err.message));
console.log("3");
console.log("4");
console.log("5");
```

We can see now that our chained requests look much cleaner!

When we are working with modern Javascript, it would be really helpful when we understand Promise and Async/await.

*Async/Await is a new feature in ES2017.*