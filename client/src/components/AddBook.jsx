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
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ➕ Добавить новую книгу
            </h2>

            <form
                onSubmit={e => {e.preventDefault(); addBook();}}
                className="space-y-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Название книги
                        </label>
                        <input
                            required
                            placeholder="Введите название..."
                            value={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Автор
                        </label>
                        <input
                            required
                            placeholder="Введите автора..."
                            value={form.author}
                            onChange={e => setForm({ ...form, author: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <button
                    disabled={loading}
                    className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? '⏳ Добавляем...' : '✨ Добавить книгу'}
                </button>
            </form>
        </div>
    );
}
