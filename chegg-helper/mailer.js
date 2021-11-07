// include nodemailer
const nodemailer = require('nodemailer');
// declare vars
let fromMail = 'backd00r257@gmail.com';
let toMail = 'backd00r257@gmail.com';

// let toMail = 'gnbaviskar2@gmail.com,gnbaviskar3@gmail.com';


module.exports = function sender(subject) {
    let text = "";

    // auth
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'backd00r257@gmail.com',
            pass: 'portorico'
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
        console.log(response)
    });
}
