import React from 'react'
import { useSelector } from 'react-redux';
import './NavBar.css'

const NavBar = () => {

    const handleMenuBtn = () => {
        let navbar = document.querySelector('.navbar');
        let searchForm = document.querySelector('.search-form');

        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
    }

    const handleSearchBox = () => {
        let navbar = document.querySelector('.navbar');
        let searchForm = document.querySelector('.search-form');

        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
    }

    window.onscroll = () =>{
        let navbar = document.querySelector('.navbar');
        let searchForm = document.querySelector('.search-form');

        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    let selector = useSelector(state => state.reducer1)

    console.log(selector);

    return (
        <>

            <div className="header">

                        {/* eslint-disable-next-line */}
                <a href="#" className="logo">
                    <img src={selector[0].navLogo} alt="" /> 
                </a>

                <nav className="navbar">

                    {
                        selector[0].navliName.map((item, i) => {
                            return(
                                <>

                                    <a href={`#${item}`} key={i}>{item}</a>

                                </>
                            )
                        })
                    }

                </nav>

                <div className="icons">
                    <div className="fas fa-search" id="search-btn" onClick={handleSearchBox}></div>
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                    <div className="fas fa-bars" id="menu-btn" onClick={handleMenuBtn}></div>
                </div>

                <div className="search-form">
                    <input type="search" id="search-box" placeholder="Search" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>

            </div>
            
        </>
    )
}

export default NavBar
