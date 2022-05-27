const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_LOGIN,
        pass: process.env.MAIL_PASS
    }
},
    {
        from: 'Margaret Brick <margaret.brick@inbox.ru>',
    }
);

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent ', info)
    })
}

module.exports = mailer
