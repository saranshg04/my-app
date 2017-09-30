var express= require("express");
var router = express.Router();
//console.log(router)

router.post('/dologin',function(req,res){
    var userid = req.body.userid;
      var password = req.body.pwd; 
       const userOperations =  require("../db/usercrud.js");
      const User = require("../helpers/User.js");
      const userObject = new User(userid,password);
      userOperations.search(userObject,res);
     // userOperations.update();
    });

    router.post('/update',function(req,res){
        var userid =req.body.userid;
        var password= req.body.pwd;
        const userOperations =  require("../db/usercrud.js");
        const User = require("../helpers/User.js");
        const userObject = new User(userid,password);
        userOperations.update(userObject,res);
    })

router.post('/login',function(request,response){
    // console.log("Request is ",request);
 //response.send('I am in Login');
 var userid = request.body.userid;
 var password = request.body.pwd; 
     // var userid = request.query.userid;
     // var password = request.query.pwd;
     const userOperations =  require("../db/usercrud.js");
     const User = require("../helpers/User.js");
     const userObject = new User(userid,password);
     userOperations.add(userObject,response); 
})
//      if(userid==password){
//          // response.send('<html><body><h1>Welcome '+userid+"</h1></body></html>");
//      //     let path = require("path"); 
//      //     let fullPath = path.join(__dirname,'/public/welcome.html');
//      //    response.sendFile(fullPath);
//      response.render('welcome',{user:userid});
//      }
//  else{
//      response.send('Invalid Userid or Password ');
//  }
//  });

//  var counter = 0;
//  router.get('/welcome',function(request,response){
//  counter++;
//  response.send(`<h1>Counter is ${counter} </h1>` );
//  });
 
//  router.get('/hii',function(request,response){
//     response.send("gethii");
// });
 module.exports=router;