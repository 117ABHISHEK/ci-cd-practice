const express = require("express");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"CI/CD Practice API is running !",
    });
});

app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"healthy",
    });
});

app.get("/welcome",(req,res)=>{
    res.status(200).json({
        message:"Hello User",
    });
});

module.exports=app;