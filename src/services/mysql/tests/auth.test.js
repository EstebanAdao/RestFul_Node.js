const test = require('ava')

const { connection, errorHandler } = require('./setup')

const users = require('../users')({ connection, errorHandler })
const auth = require('../auth')({ connection, errorHandler })

const create = () => users.save('adao1668@hotmail.com', '123456')

test.beforeEach(t => connection.query('TRUNCATE TABLE users')
)
test.after.always(t => {
	connection.query('TRUNCATE TABLE users')
})

test('Login de usuario - sucesso', async t => {
	await create()
	const result = await auth.authenticate('adao1668@hotmail.com', '123456')
	t.not(result.token, null)
	t.not(result.token.length, 0)
})

test('Login de Usuario - falha', async t => {
	await create()
	const promise = auth.authenticate('adao1667@hotmail.com', '123456')
	const error = await t.throwsAsync(promise)
	t.is(error.message, 'Falha ao localizar o usuario')
})
