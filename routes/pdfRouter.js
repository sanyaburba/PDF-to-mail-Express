const Router = require('express')
const pdf = require("html-pdf");
const pdfTemplate = require("../documents");
const router = new Router()


router.post('/create', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
})

router.get('/fetch', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router
