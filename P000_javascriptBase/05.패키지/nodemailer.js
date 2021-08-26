const nodemailer = require("nodemailer");

(async () => {

   // let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'devjji1207@gmail.com', // generated ethereal user
          pass: 'wnsdlf!213', // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: 'devjji1207@gmail.com', // sender address
        to: "dala1207@naver.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log('Message sent: %s', info.messageId);


})().catch(console.error);