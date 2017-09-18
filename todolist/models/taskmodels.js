var mongoose = require('mongoose');

let conn = mongoose.connection;
var Schema = mongoose.Schema;
var StatusSchema = new Schema({
	_id: {type:Schema.Types.ObjectId},
	statusname : {type:String}
});
var Status = mongoose.model('Status',StatusSchema);

var TaskSchema = new Schema({
	_id: {type:Schema.Types.ObjectId},
  	content: {type: String},
  	subjectid : {type: Schema.Types.ObjectId ,ref : 'Subject._id'},
  	taskdate : {type:Date},
  	status : {type: Schema.Types.ObjectId ,ref : 'Status'},
  	taskcreatedate : {type : Date},
  	taskupdatedate : {type : Date}
});



module.exports = mongoose.model('Task', TaskSchema,'tasks');