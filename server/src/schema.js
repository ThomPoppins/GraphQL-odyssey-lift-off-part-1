const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get tracks arrar for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "The id"
    id: ID!
    "The track title"
    title: String!
    "The author of the track"
    author: Author!
    "The thumbnail of the track"
    thumbnail: String
    "The length of the track"
    length: Int
    "The amount of modules in the track"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    "Author id"
    id: ID!
    "Author name"
    name: String!
    "Author picture"
    photo: String
  }
`;

module.exports = typeDefs;
