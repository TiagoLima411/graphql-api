const express = require('express');
const bodyParse = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParse.json());

app.use(isAuth);

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-dev-4jyn8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
    ).then(
        () => { app.listen(4200); }
    ).catch(
        err => {console.log(err)}
    )
