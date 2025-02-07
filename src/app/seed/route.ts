/*import { db } from "@vercel/postgres";
import { authors, books } from "@/app/lib/placeholder-data";

const client = await db.connect();

async function seedAuthors() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS authors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );
    `;

  console.log(`Created "authors" table`);

  const insertedAuthors = await Promise.all(
    authors.map(
      (author) => client.sql`
                INSERT INTO authors (id, name)
                VALUES (${author.id}, ${author.name})
                ON CONFLICT (id) DO NOTHING;
                `
    )
  );

  console.log(`Seeded ${insertedAuthors.length} authors`);

  return insertedAuthors;
}

async function seedBooks() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
        CREATE TABLE IF NOT EXISTS books (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        author_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        genre VARCHAR(255) NOT NULL,
        language VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        description VARCHAR(600) NOT NULL
        );
        `;

  console.log(`Created "books" table`);

  const insertedBooks = await Promise.all(
    books.map(
      (book) => client.sql`
                INSERT INTO books (author_id, name, price, genre, language, date, image_url, description)
                VALUES (${book.author_id}, ${book.name}, ${book.price}, ${book.genre}, ${book.language}, ${book.date}, ${book.image_url}, ${book.description})
                ON CONFLICT (id) DO NOTHING;
                `
    )
  );

  console.log(`Seeded ${insertedBooks.length} books`);

  return insertedBooks;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedAuthors();
    await seedBooks();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
*/
