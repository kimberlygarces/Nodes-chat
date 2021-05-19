const db = require('mongoose');
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(db => console.log('DB is conected'))
        .catch(err => console.error(err));

}

module.exports = connect;
