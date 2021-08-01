### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?  
One way to manage asynchronous code is to include the code as a callback function that is executed after the asynchronous code executes. A second way is using promises. The then block chained to the promise provides the callback function to be executed once the promise has returned a value. A third way is using async and await. Declaring a function to be async means that it will return a promise. Using the await keyword inside an async function pauses the execution of the function until an asynchronous operation is finished and the promise is resolved.

- What is a Promise?  
A promise is a guarantee of a future value from an asynchronous function. THe value will either be the completion of the asychnronous operation or a failure.

- What are the differences between an async function and a regular function?  
A regular function is synchronous. This means that each operation is executed in turn and each subsequent operation can only be executed once the previous one is complete. With an asynchronous function, the function can execute in the background while the synchronous code continues to run.

- What is the difference between Node.js and Express.js?  
Node.js allows Javascript code to be written server-side. Express.js is a webframework that alows you to create a server written using Node.js.

- What is the error-first callback pattern?  
The error-first callback pattern is when the first parameter of a callback function is an error object. The error is handled first within the function if there is one. Otherwise the error object is null and the function executes the rest of the code.

- What is middleware?  
Middleware is code that is run in the middle of the request/response cycle. They access the request and response and return next.

- What does the `next` function do?  
Next tells Node to continue execution to the next route. The next parameter is included in middleware functions and then called inside the function. 

- What does `RETURNING` do in SQL? When would you use it?  
We haven't learned this yet.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```  
The naming is inconsistent in that for elie, the variable name matches the URL paramenter but for joel it is a shortened version while for matt is a completely different. For performance, it would be better to use a Promise.all so that all three API calls can be made at the same time rather than one at a time. This function will return three promises rather than data.
