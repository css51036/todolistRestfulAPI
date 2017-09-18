# Todolist API


## Overview

Rest Api todolist 

## Install

__install node.js and npm__

Download link : <https://nodejs.org/en/download/>

__install Postman__
Download link : <https://www.getpostman.com/>

## How to run project
1. Clone project from github

			git clone [url git hub repo]
2. run command line npm start on terminal 

![npm start](https://github.com/css51036/todolistapi/blob/master/1505657704767.jpg)
 

			

### Subject
__List URL__

No|Description|Method | URL | 
--|------|------------ | ------------- |
1|Show all subject|GET       |       /subjects  | 
2|Show single a subject|GET |       /subjects/:id  |
3|Delete a subject|DELETE |      /subjects/add  | 
4|Add a subject|POST |     /subjects/:id  |
5|Edit a subject|PUT | /subjects/:id  |   


#### Show all subject
Return Json Data about Subject

* ##### __url__
	/subjects
* ##### __Method :__
	GET
* ##### __URL Params__
	None
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"subject": [
        						{
            						"_id":"59bab26ac68b0407b609d34a",
            						"subjectname": "Work",
            						"__v": 0
        						},
        						{
            						"_id": "59bb998dcef748029bf5833d",
            						"subjectname": "Personal",
            						"__v": 0
        						}
    						]
			}
* ##### __Error Response__
			{
    			"status": 404,
    			"message": "Not found",
    		}
	OR
	
			{
    			"status": 500,
    			"message": "There was a problem finding the subject.",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/subjects
		
#### Show single a subject
Return json data about single subject

* ##### __url__
	/subjects/:id
* ##### __Method :__
	GET
* ##### __URL Params__
	id = [ObjectID]
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"subject": {
        						"_id": "59bab26ac68b0407b609d34a",
        						"subjectname": "Work",
        						"__v": 0
    						}
			}
* ##### __Error Response__
			{
    			"status": 404,
    			"message": "No subject found.",
    		}
	OR
	
			{
    			"status": 500,
    			"message": "There was a problem finding the subject.",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/subjects/59bab26ac68b0407b609d34a
		
#### Delete a subject
Delete a subject in list

* ##### __url__
	/subjects/:id
* ##### __Method :__
	DELETE
* ##### __URL Params__
	id = [ObjectID]
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Subject Personal was deleted."
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "There was a problem deleting the subject..",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/subjects/59bb998dcef748029bf5833d

#### Add a subject
Insert a subject in list

* ##### __url__
	/subjects/add
* ##### __Method :__
	POST
* ##### __URL Params__
	None
* ##### __Data Params__
			{
        		"subjectname": "Personal"
			}
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"subject": {
        						"__v": 0,
        						"_id": "59be239863a3620d1c31fc20",
        						"subjectname": "Personal"
    						}
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "Can not insert subject !",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/subjects/add
		
		body : {
        		"subjectname": "Personal"
			   }


#### Edit a subject
Insert a subject in list

* ##### __url__
	/subjects/:id
* ##### __Method :__
	PUT
* ##### __URL Params__
	id = [ObjectID]
* ##### __Data Params__
			{
        		"subjectname": "Personal Work"
			}
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"subject": {
        						"__v": 0,
        						"_id": "59be239863a3620d1c31fc20",
        						"subjectname": "Personal Work"
    						}
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "There was a problem updating the subject.",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/subjects/59be239863a3620d1c31fc20
		
		body : {
        		"subjectname": "Personal Work"
			   }
			   
### Task
__List URL__

No|Description|Method | URL | 
--|------|------------ | ------------- |
1|Show all tasks|GET       |       /tasks  | 
2|Show single a task|GET |       /tasks/:id  |
3|Delete a task|DELETE |      /tasks/:id  | 
4|Add a task|POST |     /tasks/add  |
5|Edit a task|PUT | /tasks/:id  |  
5|Edit a task status|PUT | /tasks/status/:id  |
#### Show all tasks
Return json data about task

* ##### __url__
	/tasks
* ##### __Method :__
	GET
* ##### __URL Params__
	None
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"task": [
        					{
            					"_id": "59be45dcc3a5040ff8aae321",
            					"content": "\"Work Rest API\"",
            					"subjectid": "59bab26ac68b0407b609d34a",
            					"taskdate": "2014-12-31T17:00:00.000Z",
            					"status": {
                							"_id": "59bf31ff734d1d05f3f88026",
                							"statusname": "pending"
            							  },
            					"taskcreatedate": "2017-09-17T09:52:28.275Z",
            					"taskupdatedate": "2017-09-17T11:01:55.602Z",
            					"__v": 0
        					},
        					{
            					"_id": "59bf3aaa61fca9025becc976",
            					"content": "\" Design Rest API\"",
            					"subjectid": "59bab26ac68b0407b609d34a",
            					"taskdate": "2014-12-31T17:00:00.000Z",
            					"status": {
                							"_id": "59bf31ff734d1d05f3f88026",
                							"statusname": "pending"
            								},
            					"taskcreatedate": "2017-09-18T03:16:58.483Z",
            					"taskupdatedate": null,
            					"__v": 0
        					}
    					]
			}
* ##### __Error Response__
			{
    			"status": 404,
    			"message": "Not found",
    		}
	OR
	
			{
    			"status": 500,
    			"message": "There was a problem finding the task.",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks
		
#### Show a single tasks
Return json data about single task

* ##### __url__
	/tasks/:id
* ##### __Method :__
	GET
* ##### __URL Params__
	id=[ObjectID]
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"task": {
        					"_id": "59be45dcc3a5040ff8aae321",
        					"content": "\"Work Rest API\"",
        					"subjectid": "59bab26ac68b0407b609d34a",
        					"taskdate": "2014-12-31T17:00:00.000Z",
        					"status": {
            								"_id": "59bf31ff734d1d05f3f88026",
            								"statusname": "pending"
        								},
        					"taskcreatedate": "2017-09-17T09:52:28.275Z",
        					"taskupdatedate": "2017-09-17T11:01:55.602Z",
        					"__v": 0
    					}
			}
* ##### __Error Response__
			{
    			"status": 404,
    			"message": "Not task found",
    		}
	OR
	
			{
    			"status": 500,
    			"message": "There was a problem finding the task.",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks/59be45dcc3a5040ff8aae321
				
####Add a task
Insert a task in list

* ##### __url__
	/tasks/add
* ##### __Method :__
	POST
* ##### __URL Params__
	None
* ##### __Data Params__
			{
            	"content":" Design Rest API",
            	"subjectid": "59bab26ac68b0407b609d34a",
            	"taskdate": "2014-12-31T17:00:00.000Z",
            	"status": 	{
                				"_id": "59bf31ff734d1d05f3f88026",
                				"statusname": "pending"
            				}
			}
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"task": {
        					"_id": "59bf3aaa61fca9025becc976",
        					"content": "\" Design Rest API\"",
        					"subjectid": "59bab26ac68b0407b609d34a",
        					"taskdate": "2014-12-31T17:00:00.000Z",
        					"status": {
            								"_id": "59bf31ff734d1d05f3f88026",
            								"statusname": "pending"
        								},
        					"taskcreatedate": "2017-09-18T03:16:58.483Z",
        					"taskupdatedate": null,
        					"__v": 0
    					}
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "Can not insert task !",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks/add
		
		body : {
           			"content":" Design Rest API",
            		"subjectid": "59bab26ac68b0407b609d34a",
            		"taskdate": "2014-12-31T17:00:00.000Z",
            		"status": 	{
                					"_id": "59bf31ff734d1d05f3f88026",
                					"statusname": "pending"
            					}
				}

#### Delete a task
Delete a task in list

* ##### __url__
	/tasks/:id
* ##### __Method :__
	DELETE
* ##### __URL Params__
	id=[ObjectID]
* ##### __Data Params__
	None
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Delete Successful"
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "There was a problem deleting the task.!",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks/59be4a22c3a5040ff8aae322
		
		
#### Update a task
Update existing a task in list

* ##### __url__
	/tasks/:id
* ##### __Method :__
	PUT
* ##### __URL Params__
	id=[ObjectID]
* ##### __Data Params__
			{
            	"content":" I Do not Design Rest API",
            	"subjectid": "59bab26ac68b0407b609d34a",
            	"taskdate": "2014-12-31T17:00:00.000Z",
            	"status": {
                			"_id": "59bf31ff734d1d05f3f88026",
                			"statusname": "pending"
            				}
			}
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"task": {
        					"_id": "59bf3aaa61fca9025becc976",
        					"content": "\" I Do not Design Rest API\"",
        					"subjectid": "59bab26ac68b0407b609d34a",
        					"taskdate": "2014-12-31T17:00:00.000Z",
        					"status": {
            								"_id": "59bf31ff734d1d05f3f88026",
            								"statusname": "pending"
        								},
        					"taskcreatedate": "2017-09-18T03:16:58.483Z",
        					"taskupdatedate": "2017-09-18T03:34:39.071Z",
        					"__v": 0
    					}
			}
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "There was a problem updating the task.!",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks/59be45dcc3a5040ff8aae321
		body :  {
            		"content":" I Do not Design Rest API",
            		"subjectid": "59bab26ac68b0407b609d34a",
            		"taskdate": "2014-12-31T17:00:00.000Z",
            		"status": {
                				"_id": "59bf31ff734d1d05f3f88026",
                				"statusname": "pending"
            					}
				}
				
#### Set status a task
Set status existing a task in list

* ##### __url__
	/tasks/status/:id
* ##### __Method :__
	PUT
* ##### __URL Params__
	id=[ObjectID]
* ##### __Data Params__
			{
            	"content":" I Do not Design Rest API",
            	"subjectid": "59bab26ac68b0407b609d34a",
            	"taskdate": "2014-12-31T17:00:00.000Z",
            	"status": {
                				"_id": "59bf3221734d1d05f3f8802c",
                				"statusname": "done"
            				}
			}
* ##### __Success Response__
			{
    			"status": 200,
    			"message": "Successful",
    			"task": {
        					"_id": "59bf3aaa61fca9025becc976",
        					"content": "\" I Do not Design Rest API\"",
        					"subjectid": "59bab26ac68b0407b609d34a",
        					"taskdate": "2014-12-31T17:00:00.000Z",
        					"status": {
            								"_id": "59bf3221734d1d05f3f8802c",
            								"statusname": "done"
        								},
        					"taskcreatedate": "2017-09-18T03:16:58.483Z",
        					"taskupdatedate": "2017-09-18T03:41:38.987Z",
        					"__v": 0
    					}
			}		
* ##### __Error Response__	
			{
    			"status": 500,
    			"message": "There was a problem updating status the task.!",
    		}
* ##### __Sample Call__
		url : localhost:3000/api/1.0/tasks/status/59be45dcc3a5040ff8aae321
		body :  {
            		"content":" I Do not Design Rest API",
            		"subjectid": "59bab26ac68b0407b609d34a",
            		"taskdate": "2014-12-31T17:00:00.000Z",
            		"status": {
                					"_id": "59bf3221734d1d05f3f8802c",
                					"statusname": "done"
            					}
				}

		

		
		


