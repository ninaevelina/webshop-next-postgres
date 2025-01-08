import { Metadata } from "next";
import { fetchFilteredBooks } from "../lib/data";
import Books from "../ui/books/books";
import Breadcrumbs from "../ui/shared/breadcrumbs/breadcrumbs";

export const metadata: Metadata = {
  title: "Books | Readit",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const books = await fetchFilteredBooks(query);
  return (
    <main>
      <section className="breadcrumbs-container">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Books", href: "/books", active: true },
          ]}
        />
      </section>
      <section className="container">
        <Books books={books} />
      </section>
    </main>
  );
}
