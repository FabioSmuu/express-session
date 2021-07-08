const { html, xss } = require('../extra.js')


const get = async (request, response) => {
	const sess = request.session

	//sess.nome deve ser tratada pra evitar que injetem uma "request.session.nome".
	if (!sess.nome) return response.redirect('/')

	const valores = {
		nome: xss(sess.nome)
	}

	response.send(html('dashboard/index.html', valores))
}

const post = async (request, response) => {
/*
	const sess = request.session
	sess.email = xss(request.body.email)
	response.redirect('/')
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({}))
*/
}

module.exports = { get, post }
