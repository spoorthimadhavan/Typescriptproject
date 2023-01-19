import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
    return (
        <header>
            <div>
                <div>
                    <div>
                        <h2>Tasks</h2>
                    </div>
                    <ul>
                        <li>
                            <Link to="/" className="nav-link px-2 text-white">
                                <button>Case Conversion</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="nav-link px-2 text-white">
                                <button>Products</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
