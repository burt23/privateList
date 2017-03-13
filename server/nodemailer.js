const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'privatelistaccesstoken@gmail.com',
    pass: 'superdupertopsecret'
  }
});


module.exports = {

  sendEmail: (email, token, callback) => {
    // setup email data with unicode symbols
    let options = {
        from: '"Private List 👻" <privatelistaccesstoken@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Top Secret', // Subject line
        text: 'Private List Access Code', // plain text body
        html: `<h1>PRIVATE LIST</h1></br><p>check out my secret list</p></br><h3>${token}</h3>`
    }

    console.log(options);
    transporter.sendMail(options, function(error, results){
      if(error){
        console.log(error)
        callback(error, null)
      }
      console.log('inside sendEmail', results);
      callback(null, results);
    })
  }




}