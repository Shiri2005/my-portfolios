import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port=3000;



app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
   const d = new Date();
   let day = d.getDay();
   if (day == 0 || day == 6) {
     res.send("Its a weekend lets chill")
   }else{
    res.send("its a weekday lets work hard with a happy smile");

   }
     res.send(`<h1>${message}</h1>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});  