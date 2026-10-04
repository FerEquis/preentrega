import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
             <Link to={"/"}>
               <img src={logo} alt="logo" />
               <span>Vino y Punto</span>
             </Link>   
            </div>
            <Nav />
        </header>
    );
};