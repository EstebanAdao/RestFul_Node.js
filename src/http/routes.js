const categories = require('../services/mysql')

const routes = (server) => {
    server.get('/', (req, res, next) => {
        res.send("Enjoy Restify 5..!")
        next()
    })
    server.get('/categoria', (req, res, next) => {
        categories
            .then(categories => {
                console.log(categories)
                res.send(['1', 'lalala'])
                next()
            })
            .catch(error => { error => console.error(error) })


    })

    server.post('/categoria', (req, res, next) => {
        const { name } = req.params
        res.send(name)
        next()
    })

    // server.put(('categoria', (req, res, next) => {
    //     res.send()
    //     next()
    // }))

    // server.delete(('categoria', (req, res, next) => {
    //     res.send()
    //     next()
    // }))
}


module.exports = routes