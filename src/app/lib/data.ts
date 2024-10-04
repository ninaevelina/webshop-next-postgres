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
    const data = await sql<Book & { author_name: string }>`
    SELECT
    books.id,
    books.author_id,
    books.name,
    books.price,
    books.genre,
    books.language,
    books.date,
    books.image_url,
    books.description,
    authors.name as author_name
    FROM books
    JOIN authors ON books.author_id = authors.id
    ORDER BY books.name ASC
    `;

    const books = data.rows;
    return books;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all books");
  }
}

export async function fetchBookById(id: string): Promise<Book> {
  try {
    const data = await sql<Book & { author_name: string }>`
    SELECT
    books.id,
    books.author_id,
    books.name,
    books.price,
    books.genre,
    books.language,
    books.date,
    books.image_url,
    books.description,
    authors.name AS author_name
    FROM books
    JOIN authors ON books.author_id = authors.id
    WHERE books.id = ${id};
    `;

    const book = data.rows[0];
    return book;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch book.");
  }
}

export async function fetchFilteredBooks(query: string) {
  try {
    const data = await sql<Book & { author_name: string }>`
    SELECT
    books.id,
    books.author_id,
    books.name,
    books.price,
    books.genre,
    books.language,
    books.date,
    books.image_url,
    books.description,
    authors.name AS author_name
    FROM books
    JOIN authors ON books.author_id = authors.id
    WHERE books.name ILIKE ${`%${query}%`}
    ORDER BY books.name ASC
    `;

    const books = data.rows;
    return books;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered books.");
  }
}
