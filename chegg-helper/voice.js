// include nodemailer
const nodemailer = require('nodemailer');
// declare vars
let fromMail = 'ghanshyamnetcore@gmail.com';
let toMail = 'gnbaviskar2@gmail.com';

// let toMail = 'gnbaviskar2@gmail.com,gnbaviskar3@gmail.com';

let subject  = 'An email using nodejs app';
let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 

// auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sampleuser@gmail.com',
        pass: 'account_password'
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