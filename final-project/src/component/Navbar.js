import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            {/*/nav*/}
            <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
              <a className="navbar-brand" href="index.html">
                <span className="fab fa-pinterest" />
              </a>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
              </ul>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <nav className="mx-auto">
                  <div className="search-bar">
                    <form className="search">
                      <input
                        type="search"
                        className="search__input"
                        name="search"
                        placeholder="Search other styles"
                        onload="equalWidth()"
                        required
                      />
                      <span className="fa fa-search search__icon" />
                    </form>
                  </div>
                </nav>
                <ul className="navbar-nav">
                  {/* notification bell */}
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      <i className="fa fa-bell">
                        <span class="badge badge-pill badge-danger">2</span>
                      </i>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      <span className="fas fa-plus-circle" />
                    </a>
                  </li>
                  <li className="nav-item dropdown @@pages__active">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="fa fa-user-circle" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item @@b__active"
                        href=".html"
                      >
                        Settings
                      </a>
                      <a
                        className="dropdown-item @@fa__active"
                        href=".html"
                      >
                        Log Out
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/*//nav*/}
        </header>
      </div>
    );
  }
}

export default Navbar;
