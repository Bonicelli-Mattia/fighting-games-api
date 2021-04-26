const { gql } = require("apollo-server");

const typeDefs = gql`
    type Character {
        name: String
        appearances: [String]
    }

    type Query {
        Characters: [Character]
    }
`;

module.exports = typeDefs;