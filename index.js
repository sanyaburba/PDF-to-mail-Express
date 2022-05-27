const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const pdf = require('html-pdf')
const cors = require('cors');
const mainRouter = require('./routes/index')
const bodyParser = require("body-parser");
const pdfTemplate = require('./documents/index3');
const mailer = require('./nodemailer')
require('dotenv').config()

const PORT = process.env.PORT || 7000
const app = express()

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', mainRouter)

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        const message = {
            to: req.body.email,
            subject: 'Your invoice, pls pay',
            text: `Hello, ${req.body.customer}, that's your invoice, check out and pay pls :)`,
            attachments: {
                filename: 'result.pdf',
                path: './result.pdf'
            }
        }
        mailer(message)
        res.send(Promise.resolve());
    });
});



app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on PORT ' + PORT))
    } catch (e) {
        console.log(e.message)
    }
}

start().catch(e => new Error('Server error: ' + e.message));
