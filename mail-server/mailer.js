const nodemailer = require('nodemailer');
const {fromMail, toMail, password} = require('./settings.json');


module.exports = function sender(subject, text) {

    // auth
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: fromMail,
            pass: password
        }
    });

    // email options
    let mailOptions = {
        from: fromMail,
        to: toMail,
        subject: subject,
        text: text
    };

    // send email
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        }
        console.log('Email sent!')
    });
}
