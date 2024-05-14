const express = require("express")
const blogRouter = require("./routes/blogs")
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.use('/blogs', blogRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})