import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand me-auto " href="#">
            <h4 className="text-warning mx-4">ECOMMERCE</h4>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jewelery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Men's clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women's clothing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"
                aria-label="Search"
                style={{
                  width: "250px",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  border: "1px solid #ced4da",
                }}
              />

              <button
                className="btn btn-outline-warning"
                type="submit"
                style={{
                  borderRadius: "20px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
