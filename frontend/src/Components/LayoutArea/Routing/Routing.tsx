import { Route, Routes } from "react-router-dom";
import AddNewBook from "../../BooksArea/AddNewBook/AddNewBook";
import BookList from "../../BooksArea/BookList/BookList";
import Home from "../Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/BooksList" element={<BookList/>}></Route>
                <Route path="/AddNewBook" element={<AddNewBook/>}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
