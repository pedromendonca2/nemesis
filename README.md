# Portfólio de compositores

> Esse é um site criado para, dado um tipo de usuário, acessar uma lista de composites clássicos com informações relevantes sobre cada um deles.

## Execução

Criamos um docker para facilitar a execução do projeto. Para usar a aplicação, é preciso instalar o docker em sua máquina (https://www.docker.com/get-started/), clonar este repositório, navegar até a pastadocker e rodar o comando para buildar e subir o container:

```sh
cd nemesis/docker

docker-compose up --build
```

Após isso, basta acessar em seu browser a localhost na porta 4200.

Para subir o backend, basta estar na raíz do repositório, abrir outro terminal e rodar o comando para subir o servidor:

```sh
cd nemesis

node server.js
```

Após isso, a API já estará escutando na porta 4200, pronta para receber as requisições.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Exemplo de utilização

Este vídeo demonstra como utilizar o sistema:

[![Demonstração do sistema](https://img.youtube.com/vi/ouxK08-g9D0/0.jpg)](https://youtu.be/ouxK08-g9D0)

## Contribuindo

1. Faça um fork (<https://github.com/kampuzzle/PI/fork>)
2. Crie uma branch de contribuição (`git checkout -b feature/fooBar`)
3. Faça um commit (`git commit -am 'Adicionando fooBar'`)
4. Faça o push para a branch (`git push origin feature/fooBar`)
5. Crie um novo Pull Request