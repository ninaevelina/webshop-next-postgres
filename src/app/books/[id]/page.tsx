import { fetchBookById } from "@/app/lib/data";
import BookCard from "@/app/ui/book/book";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const book = await fetchBookById(id);
  console.log(book);

  return (
    <>
      <BookCard book={book} />
    </>
  );
}
