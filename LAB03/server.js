// Import required packages
const connect = require('connect');
const url = require('url');

// Create a Connect app
const app = connect();

// Define a calculate function
function calculate(req, res) {
  const queryData = url.parse(req.url, true).query;
  const method = queryData.method;
  const x = parseFloat(queryData.x);
  const y = parseFloat(queryData.y);

  let result;

  switch (method) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      if (y !== 0) {
        result = x / y;
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Error: Division by zero is not allowed.');
        return;
      }
      break;
    default:
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Error: Invalid method. Allowed methods are "add", "subtract", "multiply", and "divide".');
      return;
  }

  // Send the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${x} ${method} ${y} = ${result}`);
}

// Set up a Connect route for the calculate function
app.use('/lab2', calculate);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
