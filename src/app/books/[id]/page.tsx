import { getBookById } from "@/app/lib/actions"
import { notFound } from "next/navigation"

interface IProps {
    params: { id: number }
}

export default async function Page(props: IProps) {
    const book = await getBookById(props.params.id)
    console.log(book)
    if(!book){
        return notFound()
    }
    return <div className="book-item">
        <img className="is-128x128" src={book.photo} />
        <div className="book-info">
            <p className="is-size-4">{book.title}</p>
            <p className="is-size-5">{book.auther}</p>
            <p className="is-size-5">{book.price}</p>
        </div>
    </div>
}