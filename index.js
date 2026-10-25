import express from "express"
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 5000;

 const users = [
   {id: 1, name: "Rakib", email: "rh971190@gmail.com"},
   {id: 2, name: "Rakib", email: "rh971190@gmail.com"},
   {id: 3, name: "Rakib", email: "rh971190@gmail.com"},
   {id: 4, name: "Rakib", email: "rh971190@gmail.com"}
 ];

 app.get("/", (req, res) => {
    res.send("Hellow World")
 });

 app.get("/users", (req, res) => {
   res.json(users)
 } );
 app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body }
  users.push(newUser)
  res.send({succecss: true, massage:"user add successfuly"})
 })
 app.listen(PORT, () => {
    console.log(`Server is run porl ${PORT}`)
 });