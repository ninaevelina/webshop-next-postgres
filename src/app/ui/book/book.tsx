"use client";

import { Book } from "@/app/lib/definitions";
import Image from "next/image";
import useIsMobileView from "@/app/hooks/useIsMobileView";
import Accordion from "../shared/accordion/accordion";
import "./book.scss";

interface BookProps {
  book: Book;
}

export default function BookCard({ book }: BookProps) {
  const isMobileView = useIsMobileView();
  return (
    <section className="book-section">
      <div className="book-section__img-container">
        <Image
          src={book.image_url}
          height={300}
          width={280}
          alt={`Image of ${book.name}`}
        />
      </div>
      <div className="book-section__book-details">
        <h1 className="book-section__book-details--name">{book.name}</h1>
        <p className="book-section__book-details--author">
          Author: {book.author_name}
        </p>
        <p className="book-section__book-details--lang">{book.language}</p>
        <p className="book-section__book-details--price">{book.price} kr</p>
      </div>
      <div className="book-section__info">
        {isMobileView ? (
          <>
            <Accordion
              title="Description"
              content={<p>{book.description}</p>}
            />
            <Accordion
              title="Details"
              content={
                <>
                  <p>Author: {book.author_name}</p>
                  <p>Language: {book.language}</p>
                  <p>Genre: {book.genre}</p>
                </>
              }
            />
          </>
        ) : (
          <>
            <div className="description-block">
              <h2>Description</h2>
              <p>{book.description}</p>
            </div>
            <div>
              <h3>Details</h3>
              <ul>
                <li>Author: {book.author_name}</li>
                <li>Language: {book.language}</li>
                <li>Genre: {book.genre}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
