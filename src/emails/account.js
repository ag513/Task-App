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

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'a.gunishetty@gmail.com',
        subject: 'We are SAD to see you go!!!',
        text: `Goodbye ${name}, Is there anything we could have done to make you stay?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}