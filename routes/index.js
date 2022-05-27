const Router = require('express')
const router = new Router()
const pdfRouter = require('./pdfRouter')


router.use('/pdf', pdfRouter)
// router.use('/client' )


module.exports = router
