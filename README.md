# encurtadorurl
Um simples micro-SaaS para compartilhamento de URL utilizando Node.js e React.

## 1. Links

- [Projeto](http://www.encurtadorurl.tk/)
- [API](http://api.encurtadorurl.tk:3001)

## 2. API (Back-End)

### 2.1. Instalação

1. No Terminal, acessar a pasta do Back-End e rodar o comando `npm install` para instalar os pacotes necessários.
2. Configurar o arquivo  `src/databse.ts` com as informações de acesso do seu banco de dados.
3. Executar o comando `npm run dev` para fazer a validação do TypeScript e inicializar o servidor. 

### 2.2 Como usar a API?

**Cadastrar uma nova URL**

Realizar um POST na URL `http://localhost:3001/links/` com o corpo da requisição no formato abaixo:

```json
{
    "url": "INSIRA_SUA_URL_AQUI"
}
````

**Redirecionar URL**

Realizar um GET na URL `http://localhost:3001/links/:code` onde *:code* deve ser inserido o code gerado no cadastro da URL

**Estatísticas de uma URL**

Realizar um GET na URL `http://localhost:3001/links/:code/stats` onde *:code* deve ser inserido o code gerado no cadastro da URL

## 3. Front-End

### 3.1. Instalação

1. No Terminal, acessar a pasta do Front-End e rodar o comando `npm install` para instalar os pacotes necessários.
2. Executar o comando `yarn start` para inicializar o servidor do Front-End.

**Observação**: Para o processo de deploy do Front-End, você pode executar o comando `yarn build` para gerar os arquivos otimizados. Esses arquivos serão gerados na pasta `frontend/build`

### 3.2. Acessar o projeto

A URL para acessar o projeto é `http://localhost:3000`. Para que possa funcionar corretamente, é necessário estar com o servidor back-end inicializado.