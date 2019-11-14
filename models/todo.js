var mongoose=require('mongoose');
var Tab=mongoose.model('Tab',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Date,default:Date.now
    }
});
module.exports={
    Tab
};