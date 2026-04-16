const gql = require("graphql-tag");

const types = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = types;
