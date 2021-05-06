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
- Crie uma chave de segurança para a sua sessão na [linha 9](/src/index.js#L9) da *index.js*
#### Criando uma rota:
> As rotas devem ser criadas no arquivo [rotas.js](/src/rotas.js) como por exemplo, a [linha 10](/src/rotas.js#L10).
- Use esta estrutura como escopo para suas rotas:
```js
  router.get(pagina, require(diretorio).metodo)
```
- `pagina` : se refere ao pathname da url. *(//link:8000/pathname)*
- `diretorio` : aponta para o arquivo.js referente a esta rota. *(./diretorio/arquivo.js)*
- `metodo` : chama o tratamento da pathname para lhe dar com **query** e **body** *(get/post)*

#

**Obrigado pela sua atenção!**
