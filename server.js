const express = require('express');
const app = express();

app.use(express.static('public')); // Tímto zpřístupníš složku public

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});
