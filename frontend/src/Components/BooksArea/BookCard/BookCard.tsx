import axios from "axios";
import { useState } from "react";
import BooksModel from "../../../models/books";
import config from "../../../utils/config";
import "./BookCard.css";
import parse from "html-react-parser";

// blabla
let x = 5;
interface BookCardProps {
  book: BooksModel;
}

function BookCard(props: BookCardProps): JSX.Element {
  const [moreInfo, setMoreInfo] = useState("");
  let bookID = "book-" + props.book.bookId.toString();

  async function bookMoreInfo() {
    const response = await axios.get(config.bookUrl + props.book.bookId);
    let htmlBookMoreInfo =
      '<p className="card-text">summary:' + response.data[0].summary + "</p>";
    htmlBookMoreInfo +=
      '<p className="card-text">qty: ' + response.data[0].stock + "</p>";
    htmlBookMoreInfo +=
      '<p className="card-text">price: ' + response.data[0].price + "</p>";
    setMoreInfo(htmlBookMoreInfo);
    //const moreInfo = response.data;
    //return moreInfo;
  }

  return (
    <div className="BookCard">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.book.bookName}</h5>
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href={`#${bookID}`}
                role={bookID}
                aria-expanded="false"
                aria-controls={bookID}
                onClick={bookMoreInfo}
              >
                more info..
              </a>
            </p>
            <div className="collapse" id={bookID}>
              <div className="card card-body">{parse(moreInfo)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
function bookMoreInfo() {
  throw new Error("Function not implemented.");
}
