import { readFile } from "fs/promises"
import { IBook } from "./types"

export const getAllBooks = async (): Promise<IBook[]> => {
    const books = await readFile("books.json", "utf-8")
    if (books) {
        return JSON.parse(books)
    }
    return []
}

export const getBookById = async (id: number): Promise<IBook> => {
    const books = await readFile("books.json", "utf-8")
    const item = JSON.parse(books).filter((book: IBook) => book.id == id)
    if (books) {
        return item[0]
    }
    return { id: 0, title: "", auther: "", price: 0, photo: "" }
}