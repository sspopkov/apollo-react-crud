import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BOOK } from '../graphql';

export default function UpdateBook({ book, onDone }) {
    const [form, setForm] = useState({ title: book.title, author: book.author });

    const [updateBook, { loading }] = useMutation(UPDATE_BOOK, {
        variables: { id: book.id, ...form },
        onCompleted: onDone,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBook();
    };

    return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
            <h3 className="text-lg font-medium text-blue-900 mb-3">
                ✏️ Редактировать книгу
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                        Название
                    </label>
                    <input
                        value={form.title}
                        onChange={e => setForm({...form, title: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                        Автор
                    </label>
                    <input
                        value={form.author}
                        onChange={e => setForm({...form, author: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        required
                    />
                </div>

                <div className="flex gap-2 pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? '⏳ Сохраняем...' : '💾 Сохранить'}
                    </button>

                    <button
                        type="button"
                        onClick={onDone}
                        className="px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        ❌ Отмена
                    </button>
                </div>
            </form>
        </div>
    );
}
