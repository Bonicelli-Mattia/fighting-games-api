const data = require("./data");

module.exports = {
    Query: {
        Characters: () => {
            return data.characters;
        }
    }
};