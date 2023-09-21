import "./Header.css";
import img from "./LogotipoSF.png";

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt="" />
          <h1>
            Title
          </h1>
          <h2>
            subtitle
          </h2>
            </div>
    );
}

export default Header