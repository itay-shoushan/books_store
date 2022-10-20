import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>&nbsp;&nbsp;&nbsp;
			<NavLink to="/BooksList">Books</NavLink>&nbsp;&nbsp;
			<NavLink to="/AddNewBook">Add New Book</NavLink>&nbsp;&nbsp;
        </div>
    );
}

export default Menu;
