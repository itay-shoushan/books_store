import { NavLink } from "react-router-dom";
import MyImg from "../../../Assets/Images/sfarim.jpg"
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Best bookstore in Israel</h2>
            <img id="sfrim"src={MyImg} alt="sfarim" />
        </div>
    );
}

export default Home;
