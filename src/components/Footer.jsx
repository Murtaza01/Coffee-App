import React, { useState } from "react";

function Footer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return <>
        <footer>
            <p>All Copy @ Rights Reserved to Murtaza Alkabie</p>
            <p>{time}</p>

            <div className="contact">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-telegram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a >
            </div >
        </footer >
    </>
}

export default Footer