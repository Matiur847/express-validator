const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 4242
const cors = require('cors')
const userRoute = require('./route/userRoute')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/api', userRoute)

app.use((req, res) => {
    res.status(404).json({message: 'Route Not Found!'})
})

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})