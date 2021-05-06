const { html, xss } = require('../extra.js')


const get = async (request, response) => {
	let sess = request.session

	//sess.nome deve ser tratada pra evitar que injetem uma "request.session.nome".
	if (!sess.nome) return response.redirect('/')

	let valores = {
		nome: xss(sess.nome)
	}

	response.send(html('dashboard/index.html', valores))
}

const post = async (request, response) => {
	//let sess = request.session
	//sess.email = xss(request.body.email)
	//response.redirect('/')
}

module.exports = { get, post }
