import { IBook } from "app/interfaces/IBook";
import { Book } from "./Book";
import Member from "./Member";

export default class LibraryService {
  private books: IBook[];
  private members: Member[];
  constructor({
    books = [],
    members = [],
  }: {
    books: IBook[];
    members: Member[];
  }) {
    this.books = books;
    this.members = members;
  }

  getBookById(searchId: string) {
    return this.books.find((book) => {
      return book?.id === searchId;
    });
  }
  searchBooks(searchTerm: string) {
    return this.books.filter((book) => {
      console.log(book.author);
      return (
        book?.author?.includes(searchTerm) || book.title.includes(searchTerm)
      );
    });
  }

  borrowBooks(bookId: string, memberId: string) {
    if (!this.books.includes(bookId)) {
      throw new Error("Book not found!");
    }

    if (this.books.isBorrowed()) {
      throw new Error("Book is already borrowed!");
    }

    const borrowedBook = this.getBookById("bookId");

    borrowedBook?.borrow();

    return {
      successMessage: "Book is borrowed successfully!",
    };
  }
}
