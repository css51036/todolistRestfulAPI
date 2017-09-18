var express = require('express');
var router = express.Router();
var Subject = require('../models/subjectmodels');
var mongoose   = require('mongoose');
var uri = 'mongodb://admin-todolist:css51036@ds133004.mlab.com:33004/todolistdb';
mongoose.connect(uri,{ 
	useMongoClient: true
});
/* GET  subjects  listing. */
router.get('/', function(req, res, next) {
	Subject.find({}, function (err, subject) {
    	if (!subject){
            return res.send({status : 404,message : "Not found"});
        } 
            
        if (err) {
        	console.log(err);
        	return res.send({status:500,message: "There was a problem finding the subject."});

        }else{        	 
             res.send({
                        status:200,
					  	message : "Successful",
					  	subject : subject
					  });
        }
        
    });

});
router.post('/add', function (req, res, next) {
    console.log('Add  subject');
    console.log(req.body);

    if (!req.body.subjectname) {
        return res.send({status:500, message:"Please input subject name"});
    } 
    var newSubject = new Subject({
            _id: new mongoose.Types.ObjectId(),
            subjectname :  req.body.subjectname
        });
    
    console.log('New Models  subject name :' + newSubject.subjectname);
    newSubject.save( (err, subject) => {
            console.log(err);
            if(err) return res.send({status:500 ,message:"Can not insert subject !"});
            return res.send({
                        status:200,
                        message : "Successful",
                        subject : subject
                      });
        });

});
router.get('/:id', function (req, res,next) {
    Subject.findById(req.params.id, function (err, subject) {
        if (err) return res.send({status:500 ,message:"There was a problem finding the subject."});
        if (!subject) return res.send({status:404 ,message:"No subject found."});
        return res.send({
                        status:200,
                        message : "Successful",
                        subject : subject
                      });
    });
});
// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res, next) {
    Subject.findByIdAndRemove(req.params.id, function (err, subject) {
        if (err) return res.send({status : 500,message :"There was a problem deleting the subject."});
        res.send({
                    status :200,
                    message : "Subject "+ subject.subjectname +" was deleted."});
    });
});
// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res, next) {
    
    Subject.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, subject) {
        if (err) return res.send({status : 500, message : "There was a problem updating the subject."});
        res.send({
                        status:200,
                        message : "Successful",
                        subject : subject
                      });
    });
});



module.exports = router;
