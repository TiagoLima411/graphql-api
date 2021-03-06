#API Utilizada para uso e aprendizado de graphql

npm install para dependências
npm start para rodar o projeto

#database
use https://cloud.mongodb.com/user#/atlas/login para criar um cluster 

#EndPoint para usar query
http://localhost:3000/graphql

#retorna eventos
query {
  events{
    title
    creator{
      email
      createdEvents{
        _id
      }
    }
  }
}

query {
  events {
    title
    price
    description
    creator {
      email
    }
  }
}

query {
  events {
    _id
    title
    date
    creator{
      email
      createdEvents{
        title
      }
    }
  }
}

#retorna bookings
query {
  bookings {
    event{
      title
      creator{
        email
      }
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

#loga usuario
query {
  login(email:"teste@teste", password: "teste") {
    userId
    token
    tokenExpiration
  }
}

#caso esteja usando o Postman
{
	"query": "query { login(email:\"teste@teste\", password: \"teste\") { token } }"
}


#cria um bookEvent
mutation {
  bookEvent(eventId: "5c61daef497f1832b1a3e0a0"){
    _id
    createdAt
    user{
      email
    }
  }
}