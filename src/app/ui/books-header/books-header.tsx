"use client";

import ArrowDown from "../icons/arrow-down/arrow-down";
import "./books-header.scss";

export default function BooksHeader() {
  const scrollToBookList = () => {
    const bookList = document.getElementById("book-list");
    if (bookList) {
      bookList.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="books-header">
      <div className="header-upper">
        <div className="total-books">
          <p className="total-books__amount">Explore Books</p>
          <div
            className="total-books__arrow-container"
            onClick={scrollToBookList}
          >
            <ArrowDown />
          </div>
        </div>
        <h1 className="header">Books</h1>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__hr"></div>
        <div className="header-bottom__content"></div>
      </div>
    </div>
  );
}
