const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan')
const apiRouter = require('./routes')

let app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api', apiRouter)


app.listen(3001, () => console.log(`
****************************
        Server Runnig
****************************
`));