const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
    type Character {
        name: String
        appearances: [String]
    }

    type Query {
        characters: [Character]
    }
`);

const rootValue = {
    characters: [
        {
            name: "Ryu",
            apperances: ["Street Fighter II", "Street Fighter III"]
        },
        {
            name: "Chun-Li",
            apperances: ["Street Fighter II", "Street Fighter Zero 3"]
        }
    ]
};

app.use(graphqlHTTP({
    schema,
    rootValue
}));

app.listen(8080, () => console.log("server started"));