var config = require('config.json');
var Q = require('q');
var lodash = require('lodash');
var connection = process.env.connectionStringV2 || config.connectionStringV2;
var database = process.env.databaseV2 || config.databaseV2;
const ObjectID = require('mongodb').ObjectID;
const mongo = require('mongodb').MongoClient;
mongo.connect(connection, { useUnifiedTopology: true })
    .then(conn => global.conn = conn.db(database))
    .catch(err => console.log(err));


var service = {};
service.create = create;
service.getById = getById;
service.listSchedules = listSchedules;
service.update = update;
service.delete = _delete;

module.exports = service;


function create(scheduleParameter) {
    var deferred = Q.defer();
    var schedule = global.conn.collection("schedules");
    
    schedule.findOne(
        { schedule: scheduleParameter.schedule },
        function (err, schedule) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (schedule) {
                
                deferred.reject('Agendamento "' + scheduleParameter.schedule + '" já criado');
            } else {
                createSchedule();
            }
        });

    function createSchedule() {
        schedule.insertOne(
            scheduleParameter,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();
    var schedule = global.conn.collection("schedules");
    schedule.findOne({ _id: new ObjectID.createFromHexString(_id) }, function (err, person) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (schedule) {
            deferred.resolve(schedule);
        } else {
            
            deferred.resolve();
        }
    });

    return deferred.promise;
}


function listSchedules() {
    var deferred = Q.defer();
    var schedules = global.conn.collection("schedules");

    schedules.find().toArray(function (err, schedule) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (schedule) {
           
            deferred.resolve(schedule);
        } else {
           
            deferred.resolve();
        }
    });
    return deferred.promise;
}


function update(scheduleParameter) {
    var deferred = Q.defer();
    var schedules = global.conn.collection("schedules");
    // validation
    schedules.findOne({ _id: new ObjectID.createFromHexString( scheduleParameter._id) }, function (err, schedule) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (schedule) {
            updateSchedule();
        }
    });

    function updateSchedule() {
        // fields to update
        var set = lodash.omit(scheduleParameter, '_id');

        people.updateOne(
            { _id:new ObjectID.createFromHexString( scheduleParameter._id) },
            { $set: set },
            function (err, doc) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                }

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();
    var schedules = global.conn.collection("schedules");
    schedules.deleteOne(
        { _id: new ObjectID.createFromHexString(_id) },
        function (err) {
            if (err) {
                deferred.reject(err.name + ': ' + err.message);
            }

            deferred.resolve();
        });

    return deferred.promise;
}

