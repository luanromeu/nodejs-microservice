# Desafio 

Api para expor dados de empresas

## Técnologias utilizadas

* [express](https://expressjs.com/pt-br/) - Framework NodeJS
* [Nodemon](https://nodemon.io/) - Utilitário para atualizar automaticamente o server
* [Docker](https://www.docker.com/) - Automatização e configuração do ambiente de desenvolvimento
* [sequelize](https://sequelize.org/) - ORM compativel MYSQL
* [jsonwebtoken](https://jwt.io/) -  Autenticação



### Pré-requisitos

```
NodeJS (Versão 8.0.0 ou acima)
Docker (é recomendado Versão 1.12 ou acima ) Opcional
```

# Observação
O Projeto foi desenvolvido em arquitetura de microserviços, e para isso ele conta com os seguintes serviços:
 - api-gateway (gerencia as requisições recebidas e repassa para seus devidos serviços)
 - api-auth (api de autenticação)
 - api-companies (api de empresas)
 - mysql (container onde está instalado e configurado o mysql para conexao com as demais apis)

### Para instalar e rodar o projeto
Após realizar a clonagem do projeto, entre na pasta raiz e execute o código abaixo. 
O docker se encarregará da configuração do ambiente, instalar as dependencias necessárias e servir o projeto na porta 3000.

```
docker-compose up -- build
ou
docker-compose up -d (caso deseje liberar o terminal após subir o servidor)
```

#ATENÇÂO
```
Caso esteja utilizando windows e esteja recebendo o seguinte erro : " bash: ./wait.sh: /bin/bash^M: bad interpreter: No such file or directory"
rode o comando a baixo de clone o projeto novamente.
"git config --global core.autocrlf input"
```
Solução retirada de :  * [Solução](https://forums.docker.com/t/error-while-running-docker-code-in-powershell/34059/5)

## Author

* **Luan Romeu Dias de Lima**
