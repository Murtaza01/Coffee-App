import React from "react";
import coffee from "../coffee"
import Card from "./Card"

function Section() {
    return <>
        <div id="heading"><h2>Our Options</h2></div>
        <hr />
        <section className="container">
            {coffee.map((item) => {
                return <Card
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                />
            })}

        </section>
    </>
}

export default Section