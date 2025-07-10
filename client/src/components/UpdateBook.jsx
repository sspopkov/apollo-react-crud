import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BOOK } from '../graphql';

export default function UpdateBook({ book, onDone }) {
    const [form, setForm] = useState({ title: book.title, author: book.author });

    const [updateBook] = useMutation(UPDATE_BOOK, {
        variables: { id: book.id, ...form },
        onCompleted: onDone,
    });

    return (
        <>
            <input value={form.title}
                   onChange={e => setForm({...form,title:e.target.value})}/>
            <input value={form.author}
                   onChange={e => setForm({...form,author:e.target.value})}/>
            <button onClick={() => updateBook()}>💾 Save</button>
        </>
    );
}
