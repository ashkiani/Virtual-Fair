
function sendText(){
const accountSid = "AC258eafb7dd232b276813788d5a2368fd";
const authToken = "ed26270c209911231423ce6184f75292";
const client = require("twilio")(accountSid, authToken);

client.messages.create({
        body: 'The Virtual Career Fair is now open!',
        from: '+12402570019',
        to: '+12406458678'
    })
    .then(message => console.log(message.sid));}

sendText();