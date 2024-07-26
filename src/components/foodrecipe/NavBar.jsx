import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Food Recipe App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Recipes</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Categories 1</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
