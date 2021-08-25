import React from 'react'
import cardItem from './cardItem'

function cards() {
    return (
        <div className="cards">
            <h1>My Work</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <cardItem 
                            src="images/"
                            text="A web based application"
                            href="https://jessgiannini.github.io/New-Web-Developer-Portfolio/"
                            label="Portfolio"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default cards;
