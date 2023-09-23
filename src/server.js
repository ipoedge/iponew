const express = require('express');
const fetchContent = require('./fetch_content');

const app = express();

app.use(express.static('public'));

app.get('/fetch-content', async (req, res) => {
    try {
        const content = await fetchContent();
        res.send(content);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
