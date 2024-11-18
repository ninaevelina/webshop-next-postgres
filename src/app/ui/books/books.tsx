import Image from "next/image";
import Link from "next/link";
import "./books.scss";
import Search from "../search/search";
import { Book } from "@/app/lib/definitions";
import BooksHeader from "../books-header/books-header";

export default async function Books({ books }: { books: Book[] }) {
  return (
    <>
      <BooksHeader />
      <Search placeholder="Search for books" />
      <ul className="booklist" id="book-list">
        {books.map((book) => {
          return (
            <li key={book.id} className="list-item">
              <article className="book-card">
                <div>
                  <Image
                    src={book.image_url}
                    alt={`Image of ${book.name}`}
                    height={200}
                    width={160}
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
    </>
  );
}
