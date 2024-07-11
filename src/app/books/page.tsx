import { getAllBooks } from "../lib/actions";
import { Book } from "../lib/components/books";

export default async function Page() {
    const books = await getAllBooks()

    return <>
        <h1>Books</h1>
        <div className="book-container">
            {books.map(book => <Book book={book}/>)}
        </div>
    </>
}