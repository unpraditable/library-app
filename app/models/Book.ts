export class Book {
  public readonly id: string;
  public readonly title: string;
  public readonly author: string;
  private isBorrowed: boolean;

  constructor({
    id,
    title,
    author,
    isBorrowed = false,
  }: {
    id: string;
    title: string;
    author: string;
    isBorrowed?: boolean;
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = isBorrowed;
  }
  getIsBorrowed() {
    return this.isBorrowed;
  }
  borrow() {
    this.isBorrowed = true;
  }
  returnBook() {
    this.isBorrowed = false;
  }
}
