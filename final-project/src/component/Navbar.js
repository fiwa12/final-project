import React, { Component } from "react";
import "./../style/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand font-weight-bold" href="#">
              <img
                src="img/pinterest-logo.png"
                width={55}
                height={30}
                className="d-inline-block align-top"
                alt=""
              />
              PINSTAGRAM
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Today
                  </a>
                </li>
              </ul>
              <form action="">
                <div className="p-1 bg-light rounded rounded-pill shadow-sm">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button
                        id="button-addon2"
                        type="submit"
                        className="btn btn-link text-secondary"
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                    <input
                      type="search"
                      placeholder="Search your style?"
                      aria-describedby="button-addon2"
                      className="form-control border-0 bg-light"
                    />
                  </div>
                </div>
              </form>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-bell ml-3 mr-3"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-comment-dots mr-3"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-plus-circle mr-3"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="profile-picture">
                      <img src="img/Arya.jpg" alt="" />
                    </span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Manage Account
                    </a>
                    <a className="dropdown-item" href="#">
                      Setting
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
