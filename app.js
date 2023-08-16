const express = require('express');
const app = express();
const models = require('./models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
  
app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
var server = app.listen(3005, () => {
  var port = server.address().port;
  
  console.log('Server is working : PORT - ', port);
});

app.post('/member', async (req, res) => {
  const body = req.body;

  const member = await models.Member.create({
    fullName : body.name,
    username: body.username,
    password: body.password,
    ageGroup: body.ageGroup
  });

  res.send(member);
})