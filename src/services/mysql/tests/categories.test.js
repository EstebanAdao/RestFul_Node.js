const test = require('ava')

const { connection, errorHandler } = require('./setup')

const categories = require('../categories')({ connection, errorHandler })

const create = () => categories.save('category-test')

test.beforeEach(t => {
	connection.query('TRUNCATE TABLE categories')
})
test.after.always(t => {
	connection.query('TRUNCATE TABLE categories')
})

test('Lista de Categorias', async t => {
	await create()
	const list = await categories.all()
	// t.is(list.categories.length, 4)
	t.is(list.categories[0].name, 'category-test')
})


test('Criação de Categoria', async t => {
	const result = await create()
	t.is(result.category.name, 'category-test')
})

test('Atualização de Categoria', async t => {
	await create()
	const update = await categories.update(1, 'category-test-updated')
	t.is(update.category.name, 'category-test-updated')
	t.is(update.affectedRows, 1)
})

test('Remoção de Categoria', async t => {
	await create()
	const remove = await categories.del(1)
	t.is(remove.affectedRows, 1)
})
