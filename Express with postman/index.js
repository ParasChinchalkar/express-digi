import express from 'express';
const app= express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("Hello from paras from Nagpur")
})

app.get("/ice-tea",(req,res)=>{
    res.send("What ice tea would you like to prefer sir")
})
app.listen(port,()=>{
    console.log(`Server is ruinnsing at an port: ${port}...`)
})

//While testing on posman please make shure that you put 127.0.0.1:3000/