export type Author = {
  id: string;
  name: string;
};

export type Book = {
  id: string;
  author_id: string;
  name: string;
  price: number;
  genre: "Science Fiction" | "Fiction";
  language: "English" | "Swedish";
  date: string;
  image_url: string;
  description: string;
};
