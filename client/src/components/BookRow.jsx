import { useMutation } from '@apollo/client';
import { DELETE_BOOK, GET_BOOKS } from '../graphql';

export default function BookRow({ book }) {
    const [del] = useMutation(DELETE_BOOK, {
        variables: { id: book.id },
        update(cache, { data: { deleteBook } }) {
            cache.modify({
                fields: {
                    books(existingRefs = [], { readField }) {
                        return existingRefs.filter(ref => readField('id', ref) !== deleteBook);
                    }
                }
            });
        },
        optimisticResponse: { deleteBook: book.id },
    });

    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
                <button onClick={() => del()}>🗑 Delete</button>
            </td>
        </tr>
    );
}
