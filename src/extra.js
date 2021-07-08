const fs = require('fs')
, path = require('path')
, host = path.resolve(__dirname, 'www/')

module.exports = {
	html,
	xss: require('xss')
}

function html(arquivo, valor = {}) {
	const data = fs.existsSync(path.resolve(host, arquivo)) ? fs.readFileSync(path.resolve(host, arquivo)) : fs.readFileSync(path.resolve(host, '404.html'))
	const retorno = Object.keys(valor).map(chave => valor[chave] ? data.toString().replace(new RegExp(`::${chave}::`, 'g'), valor[chave]) : data)

	return retorno.toString()
}
