const accountSid = 'AC5d90eec11735690e7b5be53700d2d4be';
const authToken = 'f90327bb19db5af0c79710b46801a88b';
const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: "Quelqu\'un vient de se connecter à l'API.",
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+33603026209'
        })
        .then(message => console.log(message.sid));

sendMessage();