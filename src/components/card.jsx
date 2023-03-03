
import React, { useState } from "react";
import '../App.css';

const Cards = () => {
    const CardsValue = [
        {
            question: "What is the smallest country in the world with an area of only 0.49 square kilometres? A. Monaco B. Vatican C. Andorra",
            answer : "Vatican"
        },
        {
            question: "Which of the following countries is not in Central America? A. Cuba B. Mexico C. Uruguay",
            answer : "C. Uruguay"
        },
        {
            question: "What is the second-largest country in the world after Russia?",
            answer : "Canada"
        },
        {
            question: "Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean? A. Kazakhstan B. Madagascar C. Turkey",
            answer : "Kazakhstan"
        },
        {
            question : "Which of the following countries has the largest Muslim population in the world? A. Saudi Arabia B. Indonesia C. Iran",
            answer   : "B. Indonesia"
        },
        {
            question : "Which European country is divided into administrative divisions called departments? A. France B. SpainC. Portugal",
            answer   : "A. France"
        },
        {
            question : "Mouth Kilimanjaro, the highest mountain in Africa, is located in which country? A. Kenya B. Tanzania C. Lesotho",
            answer   : "B. Tanzania"
        },
        {
            question : "Which of the following countries is often regarded as the oldest republic in the world? A. Greece B. Italy C. San Marino",
            answer   : "C. San Marino"
        },
        {
            question : "Which country will host the 2024 Olympics Summer Games? A. France B. Australia C. Japan",
            answer   : "A. France"
        },
        {
            question : "Which country has the most islands in the world with more than 221,800? A. Canada B. Norway C. Sweden",
            answer   : "C. Sweden"
        }   
    
    ];

    const [flip, setFlip] = useState(false);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState({ backgroundColor: 'white' });

    //get a rundom number from based on the array length
    const randomNumber = () => setNumber(Math.floor(Math.random() * CardsValue.length));

    //set the color to a random color
    const randomColor = () => setColor({ backgroundColor: getRandomColor() });

    //generate a rundom color
    const getRandomColor = () => {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var color = "rgb(" + r + "," + g + ", " + b +")";

        return color;
    }

    return (
        <div className="card-grid">
            <div className={`card ${flip ? "flip" : ""}`} style={color}>
                <div className="front"  onClick={() => setFlip(!flip)}>
                    <p>{CardsValue[number].question}</p>
                </div>
                <div className="back"  onClick={() => setFlip(!flip)}>
                    <p>{CardsValue[number].answer}</p>
                    
                </div>
                
            </div>
            <button  className="btn" onClick={() => {randomNumber(); randomColor()}}>Next</button>
                
        </div>
        
    )
}

export default Cards;