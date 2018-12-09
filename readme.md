npm install para dependências
npm start para rodar o projeto


#EndPoint para usar query
http://localhost:3000/graphql

#retorna eventos

query {
  events
}

#cria um evento
mutation {
  createEvent(name: "Teste 2")
}