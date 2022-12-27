import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            NewsMonkey
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item my-2">
                <Link className="nav-link" aria-current="page" to="/general">
                  Home
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
          <Link className="nav-link active disabled">Disabled</Link>
        </li> */}
            </ul>
            {/* <div className={`form-check form-switch mx-2 text-${mode==='light'?'black':'white'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}

            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;