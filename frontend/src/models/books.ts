class BooksModel{
    public bookId?: number;
    public bookName: string;
    public summary: string;
    public genreId: number;
    public price: number;
    public stock: number;
    public genreName: string;   

    constructor(bookId: number, bookName: string, summary: string, genreId: number, price: number, stock: number);
    constructor(book: BooksModel);

    //{
    //     this.bookId = bookId;
    //     this.bookName = bookName;
    //     this.summary = summary;
    //     this.genreId = genreId;
    //     this.price = price;
    //     this.stock = stock;
    // }

    constructor(...args:any[]){
        if (args.length === 1) {
            this.bookName = args[0].bookName;
            this.summary = args[0].summary;
            this.genreId = args[0].genreId;
            this.price = args[0].price;
            this.stock = args[0].stock;
        }
        else if (args.length === 6) {
            this.bookId = args[0];
            this.bookName = args[1];
            this.summary = args[2];
            this.genreId = args[3];
            this.price = args[4];
            this.stock = args[5];
        }
    }

}


export default BooksModel;