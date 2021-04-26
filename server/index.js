const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server up on ${PORT}/graphql`);
});