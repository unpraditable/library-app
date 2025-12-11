import { IBook } from "app/interfaces/IBook";
import { Book } from "./Book";
import Member from "./Member";

export default class LibraryService {
  private books: Book[];
  private members: Member[];
  constructor({
    books = [],
    members = [],
  }: {
    books: IBook[];
    members: Member[];
  }) {
    this.books = books.map((bookData) => new Book(bookData));
    this.members = members;
  }

  getBookById(searchId: string) {
    return this.books.find((book) => {
      return book?.id === searchId;
    });
  }
  searchBooks(searchTerm: string) {
    return this.books.filter((book) => {
      return (
        book?.author?.includes(searchTerm) || book.title.includes(searchTerm)
      );
    });
  }

  borrowBooks(bookId: string, memberId: string) {
    const borrowedBook = this.getBookById(bookId);

    if (!borrowedBook) {
      throw new Error("Book not found!");
    }

    if (borrowedBook.getIsBorrowed()) {
      throw new Error("Book is already borrowed!");
    }

    borrowedBook.borrow();

    return {
      successMessage: "Book is borrowed successfully!",
    };
  }
}
