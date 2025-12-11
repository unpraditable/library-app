import { IBook } from "app/interfaces/IBook";
import { Book } from "./Book";

export default class Member {
  public readonly id: string;
  public readonly name: string;
  private books?: Book[];
  constructor({
    id,
    name,
    books = [],
  }: {
    id: string;
    name: string;
    books: Book[];
  }) {
    this.id = id;
    this.name = name;
    this.books = books;
  }

  getBooks() {
    return this.books;
  }
  getNumberOfBooks() {
    return this.books?.length;
  }
}
