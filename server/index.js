import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let books = [
    { id: '1', title: 'Clean Code', author: 'Robert Martin' },
    { id: '2', title: 'Design Patterns', author: 'GoF' },
];

const typeDefs = `#graphql
type Book {
    id: ID!
        title: String!
        author: String!
}

type Query {
    books: [Book!]!
        book(id: ID!): Book
}

type Mutation {
    addBook(title: String!, author: String!): Book!
        updateBook(id: ID!, title: String, author: String): Book!
        deleteBook(id: ID!): ID!
}`
;

const resolvers = {
    Query: {
        books: () => books,
        book: (_, { id }) => books.find(b => b.id === id),
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            const newBook = { id: Date.now().toString(), title, author };
            books.push(newBook);
            return newBook;
        },
        updateBook: (_, { id, title, author }) => {
            const idx = books.findIndex(b => b.id === id);
            if (idx === -1) throw new Error('Book not found');
            if (title !== undefined) books[idx].title = title;
            if (author !== undefined) books[idx].author = author;
            return books[idx];
        },
        deleteBook: (_, { id }) => {
            books = books.filter(b => b.id !== id);
            return id;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`GraphQL API ready at ${url}`);
