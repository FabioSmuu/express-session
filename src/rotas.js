const express = require('express')
, { html, xss } = require('./extra.js')
, router = express.Router()

router.use('/assets', express.static('www/assets'))

router.post('/', require('./paginas/index.js').post)
router.get('/', require('./paginas/index.js').get)

router.get('/dashboard', require('./paginas/dashboard.js').get)
router.get('/sair', require('./paginas/sair.js').get)

router.get('/teste/:valor', (request, response) => {
	const valor = xss(request.params.valor)
	
	console.log('Pagina:', valor)
	console.log('GET', request.query) //?nome=Fabio&Exemplo=exemplo&chave=valor

	response.send({[valor]: request.query})
})

router.use((req, res, next) => {
	res.status(404).send(html('404.html'))
})

router.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Erro 505')
})

module.exports = router
