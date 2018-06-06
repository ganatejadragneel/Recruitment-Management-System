var express=require('express');
var router=express.Router();
var db=require('./db1');
var query={};//specify the particular query
var coll='';//specify the particular collection
var obj1=[
{"id":0,"Title":"Accountant","Description":"Analyze financial information","Location":"Bangalore","Skills":"Mathematics,Active Listening,Monitoring,Critical Thinking","fullDes":"hi"},
{"id":1,"Title":"Advertising Manager","Description":"Plans and executes advertising policies of organization","Location":"Mumbai","Skills":"Good Organisation,Time Management,Communication etc","fullDes":"bi"},
{"id":2,"Title":"Singer","Description":"Holds felt hats over flame","Location":"Bombay","Skills":"Prior Experince in the field","fullDes":"goTo"}
];
var obj2=[{cv:"cv1"},{cv:"cv2"}];

router.get('/addjob',  function (req, response) {	
	var collection=db.get().collection('jobs')
	collection.insertMany(obj1,(err,res)=>{
			if(err) throw err;
			response.send('values inserted');
			console.log("values inserted");
			
		});
});  
	
router.get('/joblist',function(req,response){
	var collection=db.get().collection('jobs');
	collection.find().toArray(function(err,result){
		if(err) throw err;
		response.send({express:result});
		console.log(result);
	});
  });

module.exports=router;