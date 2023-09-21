import "./Header.css";
import img from "./LogotipoSF.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
      <div className="HeaderNav">
        <img src={img} alt="logo" />
        <nav className="navbar navbar-expand-lg bg-body-">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="pages/productos.html">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="pages/contactanos.html">Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };

export default Header