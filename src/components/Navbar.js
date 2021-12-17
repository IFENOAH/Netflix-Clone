import React, { useState, useEffect } from 'react'
import image1 from "../images/Netflix_logo.svg"
import image2 from "../images/me.jpg"

const Navbar = () => {

    const [change, handleChange] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                handleChange(true);
            } else handleChange(false)
        });
        return () => {
           window.removeEventListener("scroll")
        }
    }, []);

    return (
        <nav className = { `home-nav ${change && "nav-change"}` }>
            <div className = "nav-links">
                <span className = "logo" href ="">
                    <img src = {image1} alt = "netflix logo"></img>
                </span>
                <a href ="" >Home</a>
                <a href ="" >TV Shows</a>
                <a href ="" >Movies</a>
                <a href ="" >New & Popular</a>
                <a href ="" >My List</a>
            </div>

            <div className = "nav-icons">
                <a href ="" ><i class="fas fa-search"></i></a>
                <a href ="" >DVD</a>
                <a href ="" ><i class="fas fa-bell"></i></a>
                <a href =""  className = "profile-link">
                    <img src = {image2}></img>
                    <i class="fas fa-caret-down"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar



