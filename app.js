const express=require("express");
const app=express();
const path=require("path");
const publicPath=path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
const port = process.env.PORT || 3001;
app.listen(port,(req,res)=>{
    console.log("servidor levantado");
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./view/index.html"))
    })