const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sparsh.chadha27@gmail.com',
        subject: 'Thanks for joining in',
        text: `welcome to the app, ${name}.`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sparsh.chadha27@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}
