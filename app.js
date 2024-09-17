const express=require('express');
const app = express();
const userSchema=require('./models/user');
const cookieParser=require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get('/', (req,res)=>{
    res.render("index");
});

app.listen(3000);