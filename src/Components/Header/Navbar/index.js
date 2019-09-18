import React from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-static-top">
            <button className="sidebar-toggle" data-toggle="offcanvas" style={{ outline: 'none', border: '0' }}>
                <span className="sr-only">Toggle navigation</span>
            </button>

            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className="dropdown user user-menu">
                        {/** user */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar