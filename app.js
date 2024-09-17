const express=require('express');
const app = express();
const userSchema=require('./models/user');
const postSchema=require('./models/post');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get('/', (req,res)=>{
    res.render("index");
});
app.post('/register', (req,res)=>{
    let {name, username, password, email, age}=req.body;
    let user=userModel.findOne({email});
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let user=await userModel.create({
                username,
                age, 
                name,
                email,
                password: hash
            });

            let token=jwt.sign({email: emaik, userid: user._id}, "shhhh");
            res.cookie("token", token);
            res.send("registered");
        })
    })

});

app.listen(3000);