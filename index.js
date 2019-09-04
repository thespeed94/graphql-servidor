import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});


// el resolver
const root = {cliente: () => {
    return {
        "id": 12165161616165,
        "nombre": "David",
        "apellido": "Arrarte",
        "empresa": "Banexcoin",
        "emails": [
            {email: "david.arrarte@banexcoin.com"},
            {email: "correo@banexcoin.com"}
        ]
    }
}}

app.use('/graphql', graphqlHTTP({
    // que schema va a utilizar
    schema,
    // el resolver se pasa como rootvalue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => {
    console.log('El servidor esta funcionando');
})