import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql';
import BookRow from './BookRow';

export default function BookList() {
    const { data, loading, error } = useQuery(GET_BOOKS);

    if (loading) return (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Загружаем книги...</p>
        </div>
    );

    if (error) return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">❌ Ошибка: {error.message}</p>
        </div>
    );

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">
                    📖 Библиотека ({data.books.length} книг)
                </h2>
            </div>

            {data.books.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                    <p className="text-lg">📚 Пока нет книг</p>
                    <p className="text-sm">Добавьте первую книгу выше!</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Название
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Автор
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Действия
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {data.books.map(book => <BookRow key={book.id} book={book} />)}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
