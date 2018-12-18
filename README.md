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
  createEvent(eventInput: {
    title: "Test",
    description: "A description test",
    price: 9.99,
    date: "2018-12-18T14:58:53.346Z"
  }) 
  {
    title
  	description
  }
  
}

#cria um usuário
mutation {
  createUser(userInput: {email: "teste@teste.com", password:"teste"}) {
    email
    password
  }
}