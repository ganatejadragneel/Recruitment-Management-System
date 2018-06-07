const express=require('express');
const app=express();
const router=express.Router();
const db=require('./db1');
var MongoClient = require('mongodb').MongoClient;
const multer  = require('multer')
const upload = multer({ dest: '/uploads' })
const obj1=[
{"id":0,"Title":"Accountant","Description":"Analyze financial information","Location":"Bangalore","Skills":"Mathematics,Active Listening,Monitoring,Critical Thinking","fullDes":"hi"},
{"id":1,"Title":"Advertising Manager","Description":"Plans and executes advertising policies of organization","Location":"Mumbai","Skills":"Good Organisation,Time Management,Communication etc","fullDes":"bi"},
{"id":2,"Title":"Singer","Description":"Holds felt hats over flame","Location":"Bombay","Skills":"Prior Experince in the field","fullDes":"goTo"}
];

router.get('/addjob',  function (req, response) {	
	let collection=db.get().collection('jobs')
	collection.insertMany(obj1,(err,res)=>{
			if(err) throw err;
			response.send('values inserted');
			console.log("values inserted");
			
		});
});  

	
router.get('/joblist',function(req,response){
	let collection=db.get().collection('jobs');
	collection.find().toArray(function(err,result){
		if(err) throw err;
		response.send({express:result});
		console.log(result);
	});
});

router.post('/upload', upload.array(), function (req, response) {
	let collection=db.get().collection('resumes');
	let func1 = function(count) {
		collection.insertOne({id:count,name:req.body.name,email:req.body.email,skills:req.body.skills},(err,res)=>{
			if(err) throw err;
			response.send('values inserted');
			console.log("values inserted");
			
		});
	}
	collection.count({}, function(error, numOfDocs){
		if(error) return callback(error);
		let count=0;
		count=numOfDocs;
		func1(count);
	})
});  

module.exports=router;