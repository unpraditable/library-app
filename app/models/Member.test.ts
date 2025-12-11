import { Book } from "./Book";
import Member from "./Member";

describe("Member Class", () => {
  test("Constructor", () => {
    const member = new Member({ id: "1", name: "Ikal", books: [] });
    expect(member.id).toEqual("1");
    expect(member.name).toEqual("Ikal");
  });
  test("Get Books", () => {
    const member = new Member({
      id: "1",
      name: "Ikal",
      books: [
        new Book({
          id: "1",
          title: "Laskar Pelangi",
          author: "Andrea Hirata",
        }),
        new Book({
          id: "2",
          title: "Edensor",
          author: "Andrea Hirata",
        }),
      ],
    });
    expect(member.getBooks()).toEqual([
      {
        author: "Andrea Hirata",
        id: "1",
        isBorrowed: false,
        title: "Laskar Pelangi",
      },
      { author: "Andrea Hirata", id: "2", isBorrowed: false, title: "Edensor" },
    ]);

    expect(member.getNumberOfBooks()).toEqual(2);
  });
});
