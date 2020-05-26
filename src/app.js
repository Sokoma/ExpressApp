const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/help', (request, response) => {
	response.send('Get help!');
});

app.listen(3000, () => {
	console.log('Server is up and running!');
});