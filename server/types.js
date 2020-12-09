const { gql } = require("apollo-server");

module.exports = gql`
  type Grape {
    name: String!
  }

  type Query {
    grapes: [Grape]
  }

  input CreateGrapeInput{
    name: String!
  }

  type DeletePayload{
    id: ID!
  }

  type Mutation{
    createGrape(input: CreateGrapeInput!): Grape!
    deleteGrape(id: ID): DeletePayload!
  }
`;
