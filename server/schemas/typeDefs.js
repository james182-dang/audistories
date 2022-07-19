const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        createdAt: string
        image: String
        bio: String
        reviews: [Review]
        reviewCount: Int
    }

    type Album {
        _id: ID!
        name: String
        band: String
    }

    type Band {
        _id: ID!
        name: String
        albums: [Album]
    }

    type Review {
        _id: ID!
        reviewText: String
        createdAt: String
        username: String
        comments: [Comment]
        commentCount: Int
        albumName: String
    }

    type Comment {
        _id: ID
        commentBody: String
        name: String
        createdAt: String
    }

    type Query {
        me: User
        users: [User]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;