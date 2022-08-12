import React from 'react'

import {BsTelephone} from 'react-icons/bs'
const Navbar = () => {
    return (
        <>
            <header className="header">

                <a href='tell:+998997510775' className="logo"> <BsTelephone /></a>

                <nav className="navbar">
                    <div id="close-navbar" className="fas fa-times"></div>
                    <a href="#!">Bosh sahifa</a>
                    <a href="#about">Biz haqimizda</a>
                    <a href="https://www.facebook.com/groups/242105380254292/" target={' _blank'}>Facebook</a>
                    <a href="https://t.me/NarpayXKT/">Telegram</a>
                    <a href="https://my.dtm.uz/" target={' _blank'}>Hujjat topshirish</a>
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