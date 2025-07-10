import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_BOOK, GET_BOOKS } from '../graphql';
import UpdateBook from './UpdateBook';

export default function BookRow({ book }) {
    const [isEditing, setIsEditing] = useState(false);

    const [del, { loading: deleting }] = useMutation(DELETE_BOOK, {
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

    if (isEditing) {
        return (
            <tr>
                <td colSpan="3" className="px-6 py-4">
                    <UpdateBook
                        book={book}
                        onDone={() => setIsEditing(false)}
                    />
                </td>
            </tr>
        );
    }

    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{book.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{book.author}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-600 hover:text-blue-900 transition-colors px-3 py-1 rounded-md hover:bg-blue-50"
                    >
                        ✏️ Редактировать
                    </button>

                    <button
                        onClick={() => del()}
                        disabled={deleting}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-3 py-1 rounded-md hover:bg-red-50"
                    >
                        {deleting ? '⏳' : '🗑️'} Удалить
                    </button>
                </div>
            </td>
        </tr>
    );
}
