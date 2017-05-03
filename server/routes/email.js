const mailer = require('../nodemailer.js');

//EMAIL TOKEN
module.exports = (req, res) => {
  var email = req.body.email;
  var token = req.body.token;
  console.log('useremail', email);
  console.log('useremaiTOKEN', token);

  mailer.sendEmail(email, token, function(error, results){
    if(error){
      console.log(error)
    }
    console.log('successful email', results);
    res.send(results);
  })
  res.send('one your way');
}
