import React from "react";
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import "./style.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Emily Lallier</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;