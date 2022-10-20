import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header><Header></Header></header>
			<aside><Menu></Menu></aside>
            <main><Routing></Routing></main>
            <footer><Footer></Footer></footer>
        </div>
    );
}

export default Layout;
