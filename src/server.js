const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express();
const port = 3001

app.use(cors())

app.get('/api/weather', async (req, res) => {
    try {
        const response = await axios.get('https://wttr.in/?format=%C+%t+%w')
        res.json({ weather : response.data })
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data'})
    }
})

app.listen(port, () => {
    console.log(`Backend server is runnning on http://localhost:${port}`)
})