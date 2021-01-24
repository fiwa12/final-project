import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="w3l-header">
          <div className="container">
            {/*/nav*/}
            <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
              <a className="navbar-brand" href="index.html">
                <span className="fa fa-camera-retro" /> Pinstagram
              </a>
              {/* if logo is image enable this   
            <a class="navbar-brand" href="#index.html">
              <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </a> */}
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <span class="navbar-toggler-icon"></span> */}
                <span className="fa icon-expand fa-bars" />
                <span className="fa icon-close fa-times" />
              </button>
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
                      Create <span className="fa fa-plus" />
                    </a>
                  </li>
                  <li className="nav-item @@contact__active">
                    <a className="nav-link" href="contact.html">
                      <span className="fa fa-user-circle" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* toggle switch for light and dark theme */}
              {/* <div className="mobile-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="mode-container">
                        <i className="gg-sun" />
                        <i className="gg-moon" />
                      </div>
                    </label>
                  </div>
                </nav>
              </div> */}
              {/* //toggle switch for light and dark theme */}
            </nav>
          </div>
          {/*//nav*/}
        </header>
      </div>
    );
  }
}

export default Navbar;
