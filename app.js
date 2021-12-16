const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));

// app.use(express.static(path.join(__dirname, 'public'))) //into public folder

app.post('/contact', (req, res)=>{
  const {clientName, clientEmail, text, js} = req.body;
  // console.log(req.body)

  const mcData = {
    members: [
      {
        email_address: clientEmail,
        name: clientName,
        message: text,
        status: 'pending'
      }
    ]
  }

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/55dc719ac5',
    method: 'POST',
    headers: {
      Authorization: 'auth 0705b7e8db328d67312e7012d25929e8-us20'
    },
    body: mcDataPost
  }
  if(clientEmail){
    request(options, (err, response, body)=>{
      if(err){
        res.json({error: err})
      }else{
        if(js){
          res.sendStatus(200);
        }else{
          res.redirect('/index.html');
        }
      }
    })
  }else{
    res.status(404).send({message: 'Failed'})
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log("server started"));

