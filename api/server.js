const express = require('express')
const app = express()
const login = require('./authService');
const cors=require('cors');
const port = 3000
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
 app.use(express.json({strict: false}));
 app.use(express.urlencoded())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/signin',(req,res,next)=>{
    console.log(req.body.username+""+req.body.password);
     login.sigin(req).then((data)=>{
        res.json({
            token:data,
            expiresIn: '1800s'
        });

     });    
})
app.post('/login', (req, res,next) => {
    login.logincheck(req.body.username,req.body.password).then((data)=>{
     //    console.log(JSON.stringify(data))
     //    response=[{
     //        token:data[0].token,
     //        expiresIn:'1800s',
     //        username:data[0].username,
     //        emailId:data[0].emailId,
     //        contactNo:data[0].contactNo
     //    }];
 
        res.json(data);
    });
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})