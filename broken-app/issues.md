# Broken App Issues

- You can't use async/await for the mapping function. The mapping returns promises. I changed the asynchronous handling to use Promise.all and then promise chaining with then/catch.
- The code was missing app.use(express.json()). This is necessary for the server to recognize the incoming request object as a JSON object.
- All variables should be declared with let or const, not var. Express variables at the top should be declared using const not let.
- For the catch to be able to access the error and pass it to the middleware function next, it must be passed the error object as an argument.


# Refactoring
- Added middleware to deal with errors.
- Added comments.