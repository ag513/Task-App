const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'a.gunishetty@gmail.com',
        subject: 'Thanks for Joining in!',
        text: `welcome to the app, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail
}