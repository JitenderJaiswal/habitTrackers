const express=require('express');         //1.connect express server
const app=express();
const port=8000;   

const db=require('./config/mongoose');    //2.connect mongodb

const bodyParser = require('body-parser');  
app.use(bodyParser.urlencoded({ extended: false }));//3.body parser middleware

app.use(express.static('./assets'));      //4.static files html,css,javascript(frontend)

app.use('/',require('./routes'));         //5.Router

app.set('view engine','ejs');             //6.EJS(Embedded JavaScript templates)
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    console.log(`Error in running the server:${err}`);
     
    console.log(`Server is running on port:${port}`);
});