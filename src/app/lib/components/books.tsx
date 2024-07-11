import { IBook } from "../types"
import { NavLink } from "./navlink"

interface Props {
    book: IBook
}

export const Book = ({ book }: Props) => {
    const url = `/books/${book.id}`
    return <div>
        <NavLink href={url}><img src={book.photo} /></NavLink>
        <p>{book.title}</p>
        <p>{book.auther}</p>
        <p>{book.price}</p>
    </div>

}