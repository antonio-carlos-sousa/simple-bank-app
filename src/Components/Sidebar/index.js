import React from 'react'

import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/dashboard">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/payments">
                            <i className="fa fa-euro"></i> Pagamentos
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar