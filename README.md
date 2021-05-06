# Repositorio de arquivos para criação de api.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)


Este projeto tem como o intuito, facilitar a criação de rotas e sessões para propositos simples e diretos.

> Tentei deixar o mais simples e cru possivel para o entendimento de iniciantes na area.


| Dependencia | Versão|
| - | - |
| express | 4.17.1
| express-session | 1.17.1
| xss | 1.0.9
#

## Configurações:
#### Chave de segurança:
- Crie uma chave de segurança para a sua sessão na [linha 9](/src/index.js#L9) da [*./src/index.js*](/src/index.js)

#### Base da pagina:
> Os arquivos das paginas se localisa em [./src/paginas](./src/paginas)
```js
//Esta função é executada quando for chamado o methodo GET.
const get = async (request, response) => {
	//Variavel de escopo penas para simplificar o codigo.
	let sess = request.session

	//sess.chave verifica se existe uma sessão de nome "chave".
	if (!sess.chave) return console.log('Sessão inexistente')

	//Este objeto será passado para a pagina trocando ::exemplo:: por valores.exemplo
	let valores = {
		exemplo: xss(sess.chave) //atribui a sessão chave para o objeto.
	}

	//Exibe o html para o cliente, trocando todos ::valores:: pelo objeto valores.
	response.send(html('diretorio/arquivo.html', valores))
}

//Esta função é executada quando for chamado o methodo POST.
const post = async (request, response) => {
	//Variavel de escopo penas para simplificar o codigo.
	let sess = request.session

	//Esta comparação barra a insersõ de sessão se o valor do input exemplo do html for diferente de 'Smuu'.
	if (xss(request.body.exemplo) !== 'Smuu') return response.send(html('index.html'))

	//Caso exista um valor no input exemplo do html, será inserido a sessão chave.
	if (xss(request.body.exemplo)) sess.chave = xss(request.body.exemplo)

	//Efetua o redirecionamento da pagina caso a sessão chave seja valida.
	return (sess.chave) ? response.redirect('/dashboard') : response.send(html('index.html', valores))
}

module.exports = { get, post }
```

#### Criando uma rota:
> As rotas devem ser criadas no arquivo [./src/rotas.js](/src/rotas.js) como por exemplo, a [linha 10](/src/rotas.js#L10).
> 
> 

- Use esta estrutura como escopo para suas rotas:
```js
  router.get(pagina, require(diretorio).metodo)
```
- `pagina` : se refere ao pathname da url. *(//link:8000/pathname)*
- `diretorio` : aponta para o arquivo.js de sua base referente a esta rota. *(./paginas/arquivo.js)*
- `metodo` : chama o tratamento da pathname para lhe dar com **query** e **body** *(get/post)*

#

**Obrigado pela sua atenção!**
