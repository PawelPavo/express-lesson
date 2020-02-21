const express = require ('express');
// const cores = require ('cores');
const apiRouter = require('./routes')

let app = express();

// app.use(cores())
app.use(express.json())
app.use('/api', apiRouter)


app.listen(3001, () => console.log(`
*******************************
EXPRESS API server running...
*******************************
`));