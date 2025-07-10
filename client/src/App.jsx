import BookList from './components/BookList';
import AddBook from './components/AddBook';

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        📚 Apollo GraphQL CRUD
                    </h1>
                    <p className="text-gray-600">Управляйте своей библиотекой книг</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <AddBook />
                    <BookList />
                </div>
            </div>
        </div>
    );
}
