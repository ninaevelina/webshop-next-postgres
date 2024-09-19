import { fetchBooks } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import "./books.scss";

export default async function Books() {
  const books = await fetchBooks();
  console.log(books);

  return (
    <ul className="booklist">
      {books.map((book) => {
        return (
          <li key={book.id} className="list-item">
            <article className="book-card">
              <div>
                <Image
                  src={book.image_url}
                  alt={`Image of ${book.name}`}
                  height={220}
                  width={180}
                />
              </div>
              <div className="book-card__details">
                <Link href={`/books/${book.id}`}>{book.name}</Link>
                <p>{book.author_name}</p>
                <p>{book.price}:-</p>
                <button className="book-card__details--button">
                  Add to cart
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
