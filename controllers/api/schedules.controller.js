var express = require('express');
var router = express.Router();
var scheduleService = require('services/schedule');

// routes
router.post('/', createSchedule);
router.get('/', listSchedules);
router.put('/', updateSchedule);
router.get('/:_id', getSchedule);
router.delete('/:_id', deleteSchedule);

module.exports = router;

function createSchedule(req, res) {
    scheduleService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function listSchedules(req, res) {

        pessoaService.listSchedules()
            .then(function (schedule) {
                if (schedule) {
                    res.send(schedule);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(function (err) {
                res.status(400).send(err);
            });
}

function getSchedule(req, res) {
    var scheduleId = req.params._id;
    scheduleService.getById(scheduleId)
        .then(function (schedule) {
            if (schedule) {
                res.send(schedule);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function updateSchedule(req, res) {
    scheduleService.update(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteSchedule(req, res) {
    var scheduleId = req.params._id;
    scheduleService.delete(scheduleId)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}