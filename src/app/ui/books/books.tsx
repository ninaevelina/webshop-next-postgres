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
      <Search placeholder="Type to search.." />
      <ul className="booklist" id="book-list">
        {books.map((book) => {
          return (
            <li key={book.id} className="list-item">
              <article className="book-card">
                <div className="book-card__image-container">
                  <Image
                    src={book.image_url}
                    alt={`Image of ${book.name}`}
                    loading="lazy"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    style={{
                      objectFit: "contain",
                      maxHeight: "100%",
                      padding: "40px 0px",
                    }}
                    fill
                  />
                </div>
                <div className="book-card__details">
                  <Link href={`/books/${book.id}`}>{book.name}</Link>
                  <p>{book.author_name}</p>
                  <p>{book.price}:-</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
