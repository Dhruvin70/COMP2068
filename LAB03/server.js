// Import the required modules
var connect = require('connect');
var url = require('url');

// Create a new Connect application
var app = connect();

// Define the calculate function
var calculate = function(req, res, next) {
    // Parse the URL parameters
    var query = url.parse(req.url, true).query;
    var method = query.method;
    var x = parseFloat(query.x);
    var y = parseFloat(query.y);
    var result;

    // Perform the appropriate math operation
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
            if (y != 0) {
                result = x / y;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid method';
            break;
    }

    // Display the result
    res.end(`${x} ${method} ${y} = ${result}`);
};

// Use the calculate function for all requests
app.use(calculate);

// Start the server
app.listen(3000);
