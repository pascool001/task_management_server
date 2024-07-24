const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const mg = require("nodemailer-mailgun-transport");

const sendEmail = async (email, subject, payload, template) => {

  try {
    const transporter = nodemailer.createTransport(mg({
      auth: {
        api_key: process.env.MAILGUN_API_KEY, 
        domain: process.env.MAILGUN_DOMAINE,
      }
    }));
    console.log("mailgun params: ", process.env.MAILGUN_API_KEY, '  ', process.env.MAILGUN_DOMAINE)

    const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    const compiledTemplate = handlebars.compile(source);

    const options = () => {
      return {
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: subject,
        html: compiledTemplate(payload),
      };
    };

    // Send email
    transporter.sendMail(options(), (error, info) => {
      if (error) {
        return error;
      } else {
        console.log('successfully sent !!')
        return res.status(200).json({
          success: true,
        });
      }
    });
  } catch (error) {
    // return  error;
    console.log('send error: ', error)
  }
};


module.exports = sendEmail;
