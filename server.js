
const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})


app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})


const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.post('/quotes', (req, res) => {
  console.log(req.body)
})

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
 
})

db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  Great! You now see an array of quotes (I only have one right now). We’ve completed the first part – getting data from MongoLab. The next part is to generate a HTML that contains all our quotes.
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})