import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port=4000;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
   const d = new Date();
   let day = d.getDay();
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = dayNames[day];

let message = `Happy ${dayName}!`;
   if (day == 0 || day == 6) {
     message += "It's a weekend- lets chill"  
   }else{
    message += "its a weekday lets work hard with a happy smile";

   }

     res.render("index",{message});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});  