const express = require('express');

const app = express();


// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

<<<<<<< HEAD
  res.send('Welcome to  Nodejs App');
=======
  res.send('Hello from Nodejs App');
>>>>>>> 8b624e56524b68629d2851016907b262f022208d

});


// Start server on port 3000 or custom port via environment variable

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);

});


module.exports = app;
