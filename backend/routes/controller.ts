import express, { NextFunction, Request, Response } from "express";
import BookModel from "../model/book-model";
import logic from "../logic/logic";
import { request } from "http";

const router = express.Router();

// GET http://localhost:3001/api/genres
router.get(
  "/api/genres",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const genres = await logic.getAllGenres(); //will create array of objects
      response.json(genres); //send as json
    } catch (err: any) {
      next(err);
    }
  }
);

// GET http://localhost:3001/api/books
router.get(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const books = await logic.getAllBooks(); //will create array of objects
      response.json(books);
    } catch (err: any) {
      next(err);
    }
  }
);

// POST http://localhost:3001/api/books
router.post(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const book = new BookModel(request.body);
      const addBook = await logic.addBook(book);
      response.status(201).json(addBook);
    } catch (err: any) {
      next(err);
    }
  }
);

// get http://localhost:3001/api/book/:bookId
router.get(
  "/api/book/:bookId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log(request.body);
      const getBookById = await logic.getBookById(parseInt(request.params.bookId));
      console.log(getBookById);
      response.status(200).json(getBookById);
    } catch (err: any) {
      next(err);
    }
  }
);

// get http://localhost:3001/api/book?bookId={bookID}
router.get(
  "/api/book",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log(request.body);
      const bookId =  request.query.bookId === undefined ? "" : request.query.bookId.toString();
      const getBookById = await logic.getBookById(parseInt(bookId));
      response.status(200).json(getBookById);
    } catch (err: any) {
      next(err);
    }
  }
);

// DELETE http://localhost:3001/api/books/:bookId
router.delete(
  "/api/books",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log(request.body);
      const deleteBook = await logic.deleteBook(request.body.bookId);
      response.status(201).json(deleteBook);
    } catch (err: any) {
      next(err);
    }
  }
);


export default router;
function deleteBook(bookId: any) {
  throw new Error("Function not implemented.");
}

