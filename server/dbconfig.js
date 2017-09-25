module.exports = {
  user: process.env.DBU,
  password: process.env.DBP,
  database: process.env.DBD 
}


console.log('process.env.DBU', process.env.DBU);
console.log('process.env.DBP', process.env.DBP);
console.log('process.env.DBD', process.env.DBD);