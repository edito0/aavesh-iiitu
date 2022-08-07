import React from 'react';
import '../header.css'
import logo from '../aavesh_logo.jpeg';

function Header() { 

    function menu() {
        const humbuerger = document.querySelector('.humburger');
        const humbuergerLine = document.querySelectorAll('.humburger-line');

        humbuergerLine.forEach((element) => {
            element.classList.toggle('menu');
        });

        const navbar = document.querySelector('.nav__list__container')
        navbar.classList.toggle('nav__list__container-menu');
        humbuerger.classList.toggle('humburger-menu');;

       
    }



    return (
        <>
            <header class="home__header">
                <nav>
                    <div class="nav__logo__container">
                        <img  src={logo} alt="" />
                    </div> 

                    <div class="nav__list__container">
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="products.html">PRODUCTS</a></li>
                            <li><a href="about.html">ABOUT US</a></li>
                            <li><a href="gallery.html">EVENTS</a></li>
                            <li><a href="contact-us.html">CONTACT US</a></li>
                        </ul>
                    </div>

                </nav>

                <div class="header__data__container">
                    <h1>Dr CLEAN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto accusamus, perspiciatis
                        nam aliquid id nostrum, error officia obcaecati sapiente rerum, veniam iusto voluptates deserunt
                        ratione earum magnam odit aperiam!</p>
                </div>

                <div class='humburger' onClick={menu}>
                    <div class='humburger-line'></div>
                    <div class='humburger-line'></div>
                    <div class='humburger-line'></div>
                </div>




            </header>
        </>
    );
}

export default Header;
