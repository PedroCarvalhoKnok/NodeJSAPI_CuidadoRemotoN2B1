
var express = require('express');
var router = express.Router();
var userService = require('services/users');

router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);

module.exports = router;

function authenticateUser(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (response) {
            if (response) {
                res.send({ userId: response.userId, token: response.token });
            } else {
                res.status(401).send('Usuário e/ou senha inválidos');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function registerUser(req, res) {
    userService.create(req.body)
        .then(function (user) {
            res.status(200).send(user);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}