const express = require('express');
const response = require('../../Network/response');
const controller = require('./controller')
const router = express.Router();

router.get('/', function (req, res) {
    const filterMessages = req.body.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500)
        })
});

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        });
});

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.body.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        });
})

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuarios ${req.params.id} eliminado`)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
})


module.exports = router;