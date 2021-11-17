const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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