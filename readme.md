#API Utilizada para uso e aprendizado de graphql

npm install para dependências
npm start para rodar o projeto

#EndPoint para usar query
http://localhost:3000/graphql

#retorna eventos
query{
  events {
    title
    description
  }
}

#cria um evento
mutation {
  createEvent(eventInput: {title: "A teste", description: "A description", price: 9.99, date: "2018-12-10T18:20:17.986Z"}) {
    title
    description
  }
}