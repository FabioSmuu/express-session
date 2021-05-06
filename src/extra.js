const fs = require('fs')
, path = require('path')
, host = path.resolve(__dirname, 'www/')

module.exports = {
	html,
	xss: require('xss')
}

function html(arquivo, valor = {}) {
	let data = fs.existsSync(path.resolve(host, arquivo)) ? fs.readFileSync(path.resolve(host, arquivo)) : fs.readFileSync(path.resolve(host, '404.html'))

	if (valor != {}) Object.keys(valor).map(chave => {
		if (valor[chave]) data = data.toString().replace(new RegExp(`::${chave}::`, 'g'), valor[chave])
	})

	return data.toString()
}
