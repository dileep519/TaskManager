var express=require('express');
var bodyparser=require('body-parser'); 
var {mongoose}=require('./db/mongoose.js');
var {Tab}=require('./models/todo.js');
var {user}=require('./models/user.js');
var app=express();
//using middlewear
app.use(bodyparser.json());
//using post
app.post('/todos',(req,res)=>{
    var tab=new Tab({
        text:req.body.text,
        completed:req.body.completed
    });
    tab.save().then((resu)=>{
        console.log('inserted data');
        res.send(resu);
        mongoose.connection.close().then((resu)=>{
            console.log('conncetion closed');
            server.close();
        },(err)=>{
            console.log('err in closing');
        });
    },(err)=>{
        console.log('err');
        res.status(400).send(e);
    });
});
//using get
app.get('/todos',(req,res)=>{
    Tab.find().then((request)=>{
        res.send(request);
    },(err)=>{
        res.status(400).send(err);
    });
});
var server=app.listen(3000,()=>{
    console.log('port started');
});
module.exports={app};
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/Datab');
// var Tab=mongoose.model('Tab',{
//     text:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     },
//     completedAt:{
//         type:Date,default:Date.now
//     }
// });
// var instab=new Tab({text:'Alarm',completed:true});
// instab.save().then((res)=>{
//     console.log('inserted',res);
//     mongoose.connection.close((err,res)=>{
//         if(err){
//             return console.log('error in closing');
//         }
//         console.log('connection successfully closed');
//     });
// },(err)=>{
//     console.log('error in insertion',err);
// });

//code challange for insertion
// var Tab=mongoose.model('Tab',{
//     text:{
//         type:String
//         },
//     completed:{
//         type:Boolean,
//         default:true
//     },
//     completedAt:{
//         type:Date,
//         default:Date.now
//     }
// });
// var tab2=new Tab({text:'lunch',completed:false});
// tab2.save().then((res)=>{
//     console.log('inserted successfully');
//     mongoose.connection.close().then((res)=>{
//         console.log('Connection closed');
//     },(err)=>{
//         console.log('Error in closing connection');
//     });
// },(err)=>{
//     console.log('error in insertion');
// });

//code challange for validation
// var user=mongoose.model('user',{
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:1
//     }
// });
// var use=new user({email:'dileepchundu7@gmail.com'});
// use.save().then((res)=>{
//     console.log('inserted successfully');
//     mongoose.connection.close().then((res)=>{
//         console.log('Connection closed');
//     },(err)=>{
//         console.log('Error in closing connection');
//     });
//     },(err)=>{
//         console.log('error in insertion');
// });