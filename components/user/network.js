const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller')
const router = express.Router();

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.get('/', function (req, res) {
    controller.listUsers()
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500)
        })
});


module.exports = router;