import axios from "axios";
import BooksModel from "../models/books";
import config from "../utils/config";



class BooksService{
 public async fetchAllBooks(): Promise<BooksModel[]>{
    const response = await axios.get<BooksModel[]>(config.booksUrl);
    const books = response.data;
    return books;
}
}

const BooksServices = new BooksService();

export default BooksServices;
