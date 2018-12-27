#API Utilizada para uso e aprendizado de graphql

npm install para dependências
npm start para rodar o projeto

#database
use https://cloud.mongodb.com/user#/atlas/login para criar um cluster 

#EndPoint para usar query
http://localhost:3000/graphql

#retorna eventos
{
  events {
    title
    price
    description
    creator {
      email
    }
  }
}


#cria um evento
mutation {
  createEvent(eventInput: {title: "OUtro evento", description: "A description test 5", price: 9.99, date: "2018-11-18T14:58:53.346Z"}) {
    creator {
      email
    }
  }
}

#cria um usuário
mutation {
  createUser(userInput: {email: "teste@teste.com", password:"teste"}) {
    email
    password
  }
}