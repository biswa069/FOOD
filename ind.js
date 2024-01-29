import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 2000;

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"..", "fh")))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post('/',(req,res)=>{
    console.log(req.body);
    // res.sendStatus(200);
    res.redirect("/");

});

app.listen(port,()=>{
    console.log("listening on port " + port);
});