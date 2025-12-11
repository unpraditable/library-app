import { Book } from "./Book";

describe("Book Class Test", () => {
  test("Constructor", () => {
    const book = new Book({
      id: "1",
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
    });

    expect(book.id).toEqual("1");
    expect(book.title).toEqual("Laskar Pelangi");
    expect(book.author).toEqual("Andrea Hirata");
  });
  test("Borrow Book", () => {
    const book = new Book({
      id: "1",
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
    });

    book.borrow();

    expect(book.getIsBorrowed()).toEqual(true);
  });
  test("Return Book", () => {
    const book = new Book({
      id: "1",
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      isBorrowed: true,
    });

    book.returnBook();

    expect(book.getIsBorrowed()).toEqual(false);
  });
});
