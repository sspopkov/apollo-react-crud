import { gql } from '@apollo/client';

export const GET_BOOKS = gql
`query GetBooks {
    books { id title author }
}`
;

export const ADD_BOOK = gql
`mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
        id title author
    }
}`
;

export const UPDATE_BOOK = gql
`mutation UpdateBook($id: ID!, $title: String, $author: String) {
    updateBook(id: $id, title: $title, author: $author) {
        id title author
    }
}`
;

export const DELETE_BOOK = gql
`mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
}`
;