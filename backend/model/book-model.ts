class BookModel {
  public bookId?: number;
  public bookName: string;
  public summary: string;
  public genreId: number;
  public price: number;
  public stock: number;

  public constructor(book: BookModel) {
    this.bookId = book.bookId;
    this.bookName = book.bookName;
    this.summary = book.summary;
    this.genreId = book.genreId;
    this.price = book.price;
    this.stock = book.stock;
  }
}

export default BookModel;
