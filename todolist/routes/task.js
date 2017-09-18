var express = require('express');
var router = express.Router();
var Task = require('../models/taskmodels');
var Subject = require('../models/subjectmodels');
var mongoose   = require('mongoose');
var uri = 'mongodb://admin-todolist:css51036@ds133004.mlab.com:33004/todolistdb';
mongoose.connect(uri,{ 
	useMongoClient: true
});
// view all item in the list
router.get('/', function(req, res, next) {
	/*Task.find({}, function (err, task) {
    	if (!task){
         return res.send({status : 404,message : "Not found"});
        }             
        if (err) {
        	console.log(err);
        	return res.send({status:500,message: "There was a problem finding the task."});
        }else{        	 
             res.send({
                        status:200,
					  	message : "Successful",
					  	task : task
					  });
        } 
    });*/

    Task.find().populate('status').exec(function(err, task) { 
        console.log(task);
        console.log(err);
        if (err) return res.send({status:500,message:'There was a problem finding the tasks'});
        res.send({
                        status:200,
                        message : "Successful",
                        task : task
                      });
//Your callback code where you can access subdomain directly through custPhone.subdomain.name 
    });
});
//view a single task in the list
router.get('/:id', function (req, res,next) {
    Task.findById(req.params.id).populate('status').exec(function (err, task) {
        if (err) return res.send({status:500,message:"There was a problem finding the task."});
        if (!task) return res.send({status:404,message:"No task found."});
        return res.send({
                        status:200,
                        message : "Successful",
                        task : task
                      });
    });
});
//add a task into the list
router.post('/add', function (req, res, next) {
    if (!req.body || !req.body.content) return next(new Error('Please input a content !'));
    req.body.content = JSON.stringify(req.body.content);
    console.log(req.body.content);
    var newTask = new Task({
            _id: new mongoose.Types.ObjectId(),
            content :  req.body.content,
            subjectid : req.body.subjectid,
            taskdate : req.body.taskdate,
            status : req.body.status._id,
            taskcreatedate : new Date().toISOString(),
            taskupdatedate : null
        });
    
    	newTask.save( (err, task) => {
            console.log(err);
            if(err){ 
                return res.send({status:500,message:"Can not insert task !"});
            }
            else{
                Task.findById(newTask._id).populate('status').exec(function (err, task) {
                    if (err) return res.send({status:500,message:"There was a problem  insert the task."});
                    if (!task) return res.send({status:404,message:"No task found."});
                    return res.send({
                        status:200,
                        message : "Successful",
                        task : task
                      });
                });
            }
        });
});
//delete a task from the list
router.delete('/:id', function (req, res, next) {
    Task.findByIdAndRemove(req.params.id, function (err, task) {
        if (err) return res.send({status:500,message:"There was a problem deleting the task."});
        return res.send({
                        status:200,
                        message : "Delete Successful"
                      });
    });
});
//edit existing task
router.put('/:id', function (req, res, next) {
    if (!req.body || !req.body.content) return next(new Error('Please input a content !'));
    req.body.content = JSON.stringify(req.body.content);
    var taskID = req.params.id;
    Task.findByIdAndUpdate(req.params.id, { $set: { content : req.body.content,
                                                    taskdate : req.body.taskdate,
                                                    status: req.body.status._id,
                                                    taskupdatedate : new Date().toISOString()}}, {new: true}, function (err, task) {
        if (err) {return res.send({status:500,message:"There was a problem updating the task."});}
        else
        {
                Task.findById(taskID).populate('status').exec(function (err, task) {
                    if (err) return res.send({status:500,message:"There was a problem  update the task."});
                    if (!task) return res.send({status:404,message:"No task found."});
                    return res.send({
                        status:200,
                        message : "Successful",
                        task : task
                      });
                });
        }
        
    });
});
// set the task status
router.put('/status/:id', function (req, res, next) {
    Task.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status._id,
                                                    taskupdatedate : new Date().toISOString()}}, {new: true}, function (err, task) {
        
        var taskID = req.params.id;

        if (err) {return res.status(500).send("There was a problem updating status the task.");}
        else
        {
            Task.findById(taskID).populate('status').exec(function (err, task) {
                    if (err) return res.send({status:500,message:"There was a problem  update status the task."});
                    if (!task) return res.send({status:404,message:"No task found."});
                    return res.send({
                        status:200,
                        message : "Successful",
                        task : task
                      });
                });
        }
    });
});

module.exports = router;