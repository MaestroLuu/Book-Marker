const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]!
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        password: String!
        savedbooks: [Book]
    }

    type Auth {
        token: String!
        user: [User]
    }

    type Query {
        user(userId: ID): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image: String, link: String): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs;