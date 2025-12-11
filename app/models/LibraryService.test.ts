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
        { members: [{ id: "1", name: "Ikal" }] },
      ],
    });

    expect(libraryService.searchBooks("Andrea")).toEqual([
      {
        author: "Andrea Hirata",
        id: "1",
        isBorrowed: false,
        title: "Laskar Pelangi",
      },
      { members: [{ id: "1", name: "Ikal" }] },
    ]);
  });
});
