import React from 'react'
import { Link } from 'react-router-dom'
// const logo = "../../assets/images/logo-real.png"
const Navbar = () => {
    return (
        <>
            <header className="header">

                <Link to={'/'} className="logo"> Narpay xizmat ko'rsatish texnikumi</Link>

                <nav className="navbar">
                    <div id="close-navbar" className="fas fa-times"></div>
                    <a href="#!">Bosh sahifa</a>
                    <a href="#!">Biz haqimizda</a>
                    <a href="#!">Kurslar</a>
                    <a href="#!">Bog'lanish</a>
                </nav>

                <div className="icons">
                    <div id="account-btn" className="fas fa-user"></div>
                    <div id="menu-btn" className="fas fa-bars"></div>
                </div>

            </header>


        </>
    )
}

export default Navbar