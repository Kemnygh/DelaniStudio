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
        status: 'pending'
      }
    ]
  }

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: '',
    method: 'POST',
    headers: {
      Authorization: 'auth '
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

