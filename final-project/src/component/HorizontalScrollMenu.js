import React, { Component } from "react";
import "./../style/HorizontalScrollMenu.css";

export class HorizontalScrollMenu extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="horizontal-scroll-fader">
            <nav className="horizontal-menu">
              <div className="horizontal-menu-panner">
                <a className="horizontal-menu-item" href="#">
                  La Disruption, L'Autre Rébellion
                </a>
                <a className="horizontal-menu-item" href="#">
                  Bibliothérapie
                </a>
                <a className="horizontal-menu-item" href="#">
                  Conscious &amp; Cool
                </a>
                <a className="horizontal-menu-item" href="#">
                  Le Genre
                </a>
                <a className="horizontal-menu-item" href="#">
                  Le Silence
                </a>
                <a className="horizontal-menu-item" href="#">
                  La Sincérité
                </a>
                <a
                  className="horizontal-menu-item horizontal-menu-item_on"
                  href="#"
                >
                  Happy
                </a>
                <a className="horizontal-menu-item" href="#">
                  Nowriental
                </a>
                <a className="horizontal-menu-item" href="#">
                  Roaming
                </a>
                <a className="horizontal-menu-item" href="#">
                  Data-ddiction
                </a>
                <a className="horizontal-menu-item" href="#">
                  Le Normal Superstar
                </a>
                <a className="horizontal-menu-item" href="#">
                  Afropolitanisme
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalScrollMenu;
