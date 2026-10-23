import express from "express"
const app = express();
const PORT = process.env.PORT || 5000;
 app.get("/", (_req, res) =>{
    res.send("Hellow World")
 })
 const users = [
    {id: 1, name: "Rakib" email: "rh971190@gmail.com"}
    {id: 1, name: "Rakib" email: "rh971190@gmail.com"}
    {id: 1, name: "Rakib" email: "rh971190@gmail.com"}
 ]
 app.listen(PORT,() =>{
    console.log("Server is run porl ${PORT}")
 })