import React, { useState } from "react";

function Navbar() {
    const [isClicked, setIsClicked] = useState(true)

    function handleClick() {
        setIsClicked(!isClicked)
    }
    return <>
        <nav>
            <a href="#" id="logo">Coffee<span>.</span></a>
            <ul className={isClicked ? "nav-list" : "nav-list active"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <a className="mobile" id="no-hover"
                onClick={handleClick}>
                <i className={isClicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
            </a>
        </nav>
    </>
}

export default Navbar