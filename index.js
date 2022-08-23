const express = require('express')
const routes = require('./routes/routes.js')

const app = express()
const PORT = 8000



//routes
app.use('/api/v1/', routes)



app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))