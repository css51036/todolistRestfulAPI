var mongoose = require('mongoose');

let conn = mongoose.connection;
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
	_id: {type:Schema.Types.ObjectId,ref:'Task.subjectid'},
  	subjectname: {type: String},
  	/*todo : [{	
  				task : { type: Schema.Types.ObjectId, ref: 'Task' }
  			}] */
});

module.exports = mongoose.model('Subject', SubjectSchema,'subject');