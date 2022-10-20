//get response from sql server like rest , get 200 -> OKpacket
import { OkPacket } from "mysql";
//we going to use the DAL
import dal from "../utils/dal";
//get our data structure
import BookModel from "../model/book-model";
import GenreModel from "../model/genre-model";

//CRUD -> Create Read Update Delete.....

//Read
const getAllGenres = async (): Promise<GenreModel[]> => {
  const sql = "SELECT * FROM genres";
  const genres = await dal.execute(sql);
  return genres;
};

//Read
const getAllBooks = async (): Promise<BookModel[]> => {
  const sql = `
        SELECT books.*, genreName
        FROM books JOIN genres
        ON books.genreId = genres.genreId
    `;
  const books = await dal.execute(sql);
  return books;
};

//getBookById
const getBookById = async (bookId: number): Promise<BookModel> => {
  const sql = `
        SELECT books.*, genreName
        FROM books JOIN genres
        ON books.genreId = genres.genreId
        WHERE books.bookId = ${bookId}
    `;
  const book = await dal.execute(sql);
  return book;
};


//Create
const addBook = async (book: BookModel): Promise<BookModel> => {
  const sql = `INSERT INTO books VALUES(
    DEFAULT,
    '${book.bookName}',
    '${book.summary}',
    ${book.genreId},
    ${book.price},
    ${book.stock}
    )`;
    const result: OkPacket = await dal.execute(sql);
    book.bookId = result.insertId;
    return book;
};

//Delete
const deleteBook = async (bookId: number): Promise<void> => {
  const sql = `DELETE FROM books where bookId=${bookId}`;
  const result: OkPacket = await dal.execute(sql);
};

export default { getAllGenres, getAllBooks, addBook, deleteBook, getBookById };
