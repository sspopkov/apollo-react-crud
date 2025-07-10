import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, GET_BOOKS } from '../graphql';

export default function AddBook() {
    const [form, setForm] = useState({ title: '', author: '' });

    const [addBook, { loading }] = useMutation(ADD_BOOK, {
        variables: form,
        onCompleted: () => setForm({ title: '', author: '' }),
        refetchQueries: [GET_BOOKS],
    });

    return (
        <form onSubmit={e => {e.preventDefault(); addBook();}}>
            <input
                required
                placeholder="Title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <input
                required
                placeholder="Author"
                value={form.author}
                onChange={e => setForm({ ...form, author: e.target.value })}
            />
            <button disabled={loading}>Add</button>
        </form>
    );
}
