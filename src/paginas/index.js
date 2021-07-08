const { html, xss } = require('../extra.js')

const get = async (request, response) => {
	const sess = request.session
	const valores = {
		log: ' '
	}

	//sess.nome deve ser tratada pra evitar que injetem uma "request.session.nome".
    return (sess.nome) ? response.redirect('/dashboard') : response.send(html('index.html', valores))
}

const post = async (request, response) => {
	const sess = request.session
	const valores = {
		log: ' '
	}

	if (xss(request.body.nome) !== 'Smuu' || xss(request.body.pass) !== '123456') {
		valores.log = 'Nome ou senha incorreto.'
		return response.send(html('index.html', valores))
	}
	
	if (xss(request.body.nome)) sess.nome = xss(request.body.nome)
	return (sess.nome) ? response.redirect('/dashboard') : response.send(html('index.html', valores))
}

module.exports = { get, post }
