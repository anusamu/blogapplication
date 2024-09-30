const mongoose=require("mongoose");
const schema = mongoose.Schema({
    title:String,
    content:String,
    author:String
});


//Write missing code here
const blog=mongoose.model('blog',schema);//collection name first enter then coma  schema name 
module.exports=blog;



