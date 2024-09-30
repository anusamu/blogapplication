const express = require("express");


const app = express();
app.use(express.json());
const blogModel=require('./model');
require('./connection')
require('dotenv').config();
const PORT=process.env.PORT

//Write missing code here and all the CRUD operations on the database
app.get('/',async (req,res)=>{  //req and res change to async operation
  try {
      const data=await blogModel.find();  
      res.status(200).send(data);
  } catch (error) {
     res.status(404).send('data not send') ;
  }  

})

// post operation
app.post('/add',async(req,res)=>{
  try {
      var item=req.body;
      const data1=new blogModel(item)
      const savedata=await data1.save();//data save cheyan data1 model ayii assign cheythittu athine save cheyanam
      res.status(200).send('post successful')
  } catch (error) {
     res.send(404).send('post unsuccessfull') 
  }
})

// put opertion
app.put('/edit/:id',async (req,res)=>{
  try {
      const id =req.params.id;
      const data=await blogModel.findByIdAndUpdate(id,req.body)
      res.status(200).send('upadted')
  } catch (error) {
      res.status(404).send('not updated')
  }
})


// delete operation
app.delete('/delete/:id',async (req,res)=>{
  try {
      const id=req.params.id;
      const data2=await blogModel.findByIdAndDelete(id,req.body)
      res.status(200).send('deleted')
  } catch (error) {
      res.status(400).send('not deleted')
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
