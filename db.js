var mysql = require('mysql');

var db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'project_db'
        })
      db.connect(err => {
        if (err) {
          console.error('connection error', err.stack)
        } else {
          console.log('connected Successfully DB')
        }
      })

module.exports = db;