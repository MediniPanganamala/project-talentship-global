
const express = require('express');
const app = express();
const classes = require('./classes.json');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());



app.get('/classes/hathayoga', (req, res) => {
  res.json({name:'Hatha Yoga',_id:1})
})

app.get('/classes/vinyasaflow', (req, res) => {
  res.json({name:'vinyasa Flow',_id:2})
})

app.get('/classes/Ashtangayoga', (req, res) => {
  res.json({name:'Ashtanga Yoga',_id:3})
})

app.get('/classes/Yinyoga', (req, res) => {
  res.json({name:'Yin Yoga',_id:4})
})

app.get('/classes/5', (req, res) => {
  res.json({name:'Meditation and Mindfulness',_id:5})
})

app.get('/classes/kriyayoga', (req, res) => {
  res.json({name:'Kriya Yoga',_id:6})
})

app.post('/classes/newclass', (req, res) => {
  const newClass = req.body;
  classes.push(newClass);
  console.log("new classesss:", newClass)
  res.status(201).json({ message: 'Class added successfully', data: newClass });
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});



