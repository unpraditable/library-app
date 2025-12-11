import LibraryService from "./LibraryService";

describe("Library Service Class", () => {
  test("Search book by title or author", () => {
    const libraryService = new LibraryService({
      books: [
        {
          author: "Andrea Hirata",
          id: "1",
          isBorrowed: false,
          title: "Laskar Pelangi",
        },
        {
          author: "Another Author",
          id: "2",
          isBorrowed: false,
          title: "Another Book",
        },
      ],
      members: [],
    });

    expect(libraryService.searchBooks("Andrea")).toEqual([
      {
        author: "Andrea Hirata",
        id: "1",
        isBorrowed: false,
        title: "Laskar Pelangi",
      },
    ]);
  });
});
