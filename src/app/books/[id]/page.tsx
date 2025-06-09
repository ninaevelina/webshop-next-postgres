import { fetchBookById } from "@/app/lib/data";
import BookCard from "@/app/ui/book/book";
import Breadcrumbs from "@/app/ui/shared/breadcrumbs/breadcrumbs";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const book = await fetchBookById(id);
  return {
    title: `${book.name} | Readit`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const book = await fetchBookById(id);
  console.log(book);

  return (
    <main>
      <section className="breadcrumbs-container">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Books", href: "/books" },
            { label: book.name, href: `/books/${book.id}`, active: true },
          ]}
        />
      </section>
      <BookCard book={book} />
    </main>
  );
}
