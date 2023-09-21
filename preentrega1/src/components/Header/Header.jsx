import "./Header.css";
import img from "./LogotipoSF.png";

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt="" />
            <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Productos</a>
                            </li>
                            <li>
                                <a>Contactanos</a>
                            </li>
                        </ul>
            </div>
    );
}

export default Header