    const express = require('express');
    const app = express();
    const port = 4545;

    // Configuration for the EJS template engine
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    // Middleware for parsing URL-encoded data
    app.use(express.urlencoded({ extended: true }));

    // Route for the home page
    app.get('/', (req, res) => {
    res.render('index');
    });

    // Route for handling the alcohol purchase form submission
    app.post('/purchase', (req, res) => {
    const { age } = req.body;

    // Check if age is below 18
    if (age < 18) {
        res.render('error', { message: 'Lo siento, debes ser mayor de 18 años para comprar alcohol.' });
    } else {
        res.render('success', { message: '¡Transacción exitosa! Gracias por comprar alcohol.' });
    }
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });


