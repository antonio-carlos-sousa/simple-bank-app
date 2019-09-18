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
                    <li className="treeview">
                        <a>
                            <i className="fa fa-edit"></i> <span>Registos</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li>
                                <a ui-sref="billingCycle"><i className="fa fa-euro"></i> Pagamentos</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar