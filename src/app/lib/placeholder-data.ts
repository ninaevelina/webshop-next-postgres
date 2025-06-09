import { Book } from "./definitions";

const authors = [
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Sigge Eklund",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Haruki Murakami",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Alex Schulman",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Kazuo Ishiguro",
  },
  {
    id: "cb1c0eb3-466c-4cc9-8071-b45840d0a52f",
    name: "Philippe Besson",
  },
  {
    id: "07761785-d06a-4351-b936-6d378b7d79c2",
    name: "Sally Rooney",
  },
];

const books: Book[] = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    author_id: authors[3].id,
    name: "Never Let Me Go",
    price: 109,
    genre: "Science Fiction",
    language: "English",
    date: "2023-02-20",
    image_url: "/books/never-let-me-go.png",
    description:
      "Never Let Me Go takes place in an alternate reality of England during the 1990s in which mass human cloning is authorised and performed. Ishiguro started writing Never Let Me Go in 1990.",
    author_name: authors[3].name,
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    author_id: authors[1].id,
    name: "Norwegian Wood",
    price: 89,
    genre: "Fiction",
    language: "English",
    date: "1987-09-04",
    image_url: "/books/norwegian-wood.png",
    description:
      "Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman.",
    author_name: authors[1].name,
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    author_id: authors[0].id,
    name: "Gruppen",
    price: 109,
    genre: "Fiction",
    language: "Swedish",
    date: "2024-05-08",
    image_url: "/books/gruppen.png",
    description:
      "Hanna kommer till Madrid för att arbeta på Pradomuseet och allt i staden är inbjudande och förföriskt. En kväll träffar hon en grupp färgstarka unga svenskar som bestämt sig för att maximera sin tid i metropolen, som ägnar varje het sommarnatt åt att krama musten ur livet. Hanna dras till deras förtrollade krets, ivrig att få deras bekräftelse. Men de har resurser som hon inte har och efter hand fastnar hon i en härva av lögner och dubbelspel som riskerar att få fruktansvärda konsekvenser. Kommer de inse vem hon egentligen är?",
    author_name: authors[0].name,
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    author_id: authors[2].id,
    name: "Bränn alla mina brev",
    price: 79,
    genre: "Fiction",
    language: "Swedish",
    date: "2018-12-27",
    image_url: "/books/brann-alla-mina-brev.webp",
    description:
      "Efter ett uppslitande gräl inser Alex att han bär på en vrede, ett odefinierbart mörker. Besatt av att ta reda på dess ursprung följer han ledtrådar som tar honom tillbaka till sommaren 1932 och vintern 1988, och de ödesdigra händelser som kom att förändra allt.",
    author_name: authors[2].name,
  },
  {
    id: "ee3fbbab-f4bf-45fd-8329-43f44e12032e",
    author_id: authors[2].id,
    name: "Malma station",
    price: 119,
    genre: "Fiction",
    language: "Swedish",
    date: "2023-11-16",
    image_url: "/books/malma-station.jpeg",
    description:
      "Alex Schulmans nya roman utspelar sig på ett tåg. Fem personer är på resa genom Sverige: ett gift par i kris, en ensamstående far och hans dotter, och en kvinna som söker svaret på en gåta som hennes mamma lämnat efter sig.",
    author_name: authors[2].name,
  },
  {
    id: "b62b13ae-a0c6-4071-ae83-0b5db5793cd9",
    author_id: authors[2].id,
    name: "Överlevarna",
    price: 79,
    genre: "Fiction",
    language: "Swedish",
    date: "2021-08-12",
    image_url: "/books/overlevarna.jpeg",
    description:
      'Tre bröder åker tvärs över landet för att sprida sin mors aska vid torpet som ingen av dem besökt på tjugo år. Alex Schulmans "Överlevarna" är en roman om att återuppleva sin barndom som vuxen.',
    author_name: authors[2].name,
  },
  {
    id: "b916bf96-5b90-4126-92e2-5b31e8b0d804",
    author_id: authors[4].id,
    name: "Lie With Me",
    price: 169,
    genre: "Fiction",
    language: "English",
    date: "2019-09-05",
    image_url: "/books/lie-with-me.jpeg",
    description:
      "The award-winning, bestselling French novel by Philippe Besson about an affair between two teenage boys in 1984 France, translated with subtle beauty and haunting lyricism by the iconic and internationally acclaimed actress/writer Molly Ringwald.",
    author_name: authors[4].name,
  },
  {
    id: "90b548ef-f679-4e2c-ad0a-7e75df8d7b2f",
    author_id: authors[5].id,
    name: "Conversations With Friends",
    price: 149,
    genre: "Fiction",
    language: "English",
    date: "2022-05-16",
    image_url: "/books/conversations-with-friends.jpg",
    description:
      "A sharply intelligent novel about friendship, lust, jealousy, and the unexpected complications of adulthood in the 21st century.",
    author_name: authors[5].name,
  },
];

export { authors, books };
