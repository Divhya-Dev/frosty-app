import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


let Navbar = (props) => {

  const [btnColor, setColor] = useState({
    backgroundColor: 'red',
    color: 'black'
  });

const handleColour = (color) =>{
  
 return {backgroundColor: color, borderColor: color, marginRight: 10, color: 'black'};
}

  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.modeType} bg-${props.modeType}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Frosty
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.dropName}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
      <p style={{margin: 1}}>Theme:</p>
      <button class="btn btn-primary " type="submit" style={handleColour('red')} onClick={() => props.themeChange('red')}>Red</button>
      <button class="btn btn-primary " type="submit" style={handleColour('green')} onClick={() =>props.themeChange('green')}>Green</button>
      <button class="btn btn-primary " type="submit" style={handleColour('pink')} onClick={() =>props.themeChange('pink')}>Pink</button>
      <div className={`form-check form-switch text-${props.modeType === 'light'? 'dark' : 'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.onToggle}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
    </div>
    </nav>
   
 </>
  );
}

Navbar.propTypes = {
    dropName: PropTypes.string
  };

Navbar.defaultProps = {
    dropName: 'MeOw',
    name: 'Mohto'
  };
  


export default Navbar;
