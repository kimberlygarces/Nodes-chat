const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://adminkim:OSFvQfVJOr2fBg10@cluster0.clwur.mongodb.net/telegram', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
   const message = await Model.find();
   return message;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
      _id: id  
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
}