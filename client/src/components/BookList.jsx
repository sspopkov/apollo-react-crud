import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql';
import BookRow from './BookRow';

export default function BookList() {
    const { data, loading, error } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error)   return <p>Error: {error.message}</p>;

    return (
        <table>
            <thead><tr><th>Title</th><th>Author</th><th /></tr></thead>
            <tbody>
            {data.books.map(book => <BookRow key={book.id} book={book} />)}
            </tbody>
        </table>
    );
}
