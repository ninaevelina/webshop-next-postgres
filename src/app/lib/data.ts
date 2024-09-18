import { sql } from "@vercel/postgres";
import { Author, Book } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchAuthors() {
  noStore();
  try {
    const data = await sql<Author>`
        SELECT
        id,
        name
        FROM authors
        ORDER BY name ASC
        `;

    const authors = data.rows;
    return authors;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all authors.");
  }
}

export async function fetchBooks() {
  noStore();
  try {
    const data = await sql<Book>`
    SELECT
    id,
    author_id,
    name,
    price,
    genre,
    language,
    date,
    image_url,
    description
    FROM books
    ORDER BY name ASC
    `;

    const books = data.rows;
    return books;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all books");
  }
}

export async function fetchBookById(id: string) {
  try {
    const data = await sql<Book>`
    SELECT
    id,
    author_id,
    name,
    price,
    genre,
    language,
    date,
    image_url,
    description
    FROM books
    WHERE books.id = ${id};
    `;

    const book = data.rows;
    return book;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch book.");
  }
}
