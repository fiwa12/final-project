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
              Pinstagram
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
              <div className="search-bar">
              <form action="">
                <div className="search_wrap search_wrap_4">
                  <div className="search_box">
                    <div className="btn btn_common">
                      <i className="fas fa-search" />
                    </div>
                    <input
                      type="text"
                      className="input"
                      placeholder="Search your style?"
                    />
                  </div>
                </div>
              </form>
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-bell mt-2 ml-1 mr-1"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-comment-dots mt-2 ml-1 mr-1"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h4>
                      <i class="fas fa-plus-circle mt-2 ml-1 mr-1"></i>
                    </h4>
                  </a>
                </li>
                <li className="nav-item dropdown mt-1 ml-1 mr-1">
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
