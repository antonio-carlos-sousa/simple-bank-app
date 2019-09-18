import React from 'react'

import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <span className="logo-mini"><b>P</b>AP</span>
                <span className="logo-lg"><i className="fa fa-leaf"></i> <b>Primeira</b>APP</span>
            </div>

            <Navbar />
        </header>
    )
}