const { gql } = require('apollo-server-express');

const typeDefs = gql`

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

    
`;

module.exports = typeDefs;