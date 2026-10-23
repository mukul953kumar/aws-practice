import express from "express";
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 3000;

const app= express()

app.get("/health",(req,res)=>{
    res.send("ok")
})

app.listen(port,()=>{
    console.log("App started successfully on port ",port)
})