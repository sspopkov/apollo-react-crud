import BookList from './components/BookList';
import AddBook from './components/AddBook';

export default function App() {
    return (
        <div className="App">
            <h1>📚 Apollo GraphQL CRUD</h1>
            <AddBook />
            <BookList />
        </div>
    );
}
