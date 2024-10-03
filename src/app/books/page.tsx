import { fetchFilteredBooks } from "../lib/data";
import Books from "../ui/books/books";

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const books = await fetchFilteredBooks(query);
  return (
    <main>
      <section className="container">
        <Books books={books} />
      </section>
    </main>
  );
}
