const mysqlServer = require('mysql')
const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'restful_ws'
})

// const categories = connection.query('SELECT * FROM CATEGORIES', (error, results) => {
//     if (error) {

//     }
//     return { categories: results }
// })

const categories = new Promise((resolve, reject) => {
    connection.query('SELECT * FROM CATEGORIES', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve({ categories: results })
    })

})


module.exports = categories