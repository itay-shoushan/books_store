import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import BooksModel from "../../../models/books";
import BooksServices from "../../../services/bookServices";
import BookCard from "../BookCard/BookCard";
import { useNavigate } from 'react-router-dom'
import {useTimeout} from 'usehooks-ts'
import {BookAddAction,BookClearAction,BookOverrideAllBooks,} from "../Redux/BooksRedux";
import { store } from "../Redux/store";
import "./BookList.css";

function BookList(): JSX.Element {
  const [render, setRender] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (store.getState().BookState.books.length > 0) {
      console.log("data available " + store.getState().BookState.books.length);
    } else {
      console.log("No data, fetching...");
      BooksServices.fetchAllBooks()
        .then((apiBooks) => {
          // setBooks(apiBooks);
          // books.map(book => store.dispatch(BookAddAction(JSON.stringify(book))));
          store.dispatch(BookOverrideAllBooks(apiBooks));
          useTimeout(() => {
            console.log("timeout");
            store.dispatch(BookClearAction());
            console.log(
              "in timeout fun. " + store.getState().BookState.books.length);
            navigate("/BooksList");
        }, 1000 * 60 * 0.5);
          console.log("after fetch " + store.getState().BookState.books.length);
          setRender(true);
        })
        .catch((err) => console.error(err.message));
    }
  }, []);

  return (
    <div className="BookList">
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {store.getState().BookState.books.map((bookItem) => (
          <BookCard
            key={bookItem.bookId}
            book={
              new BooksModel(
                bookItem.bookId,
                bookItem.bookName,
                bookItem.summary,
                bookItem.genreId,
                bookItem.price,
                bookItem.stock
              )
            }
          ></BookCard>
        ))}
      </div>
    </div>
  );
}
export default BookList;
