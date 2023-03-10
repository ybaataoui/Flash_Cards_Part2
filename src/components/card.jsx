
import React, { useState } from "react";
import '../App.css'; 



const Cards = () => {
    const CardsValue = [
        {
            question: "What is the smallest country in the world with an area of only 0.49 square kilometres? A. Monaco B. Vatican C. Andorra",
            answer : "Vatican",
            picture : ""
        },
        {
            question: "Which of the following countries is not in Central America? A. Cuba B. Mexico C. Uruguay",
            answer : "C. Uruguay",
            picture: ""
        },
        {
            question: "What is the second-largest country in the world after Russia?",
            answer : "Canada",
            picture: "/canada.png"
        },
        {
            question: "Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean? A. Kazakhstan B. Madagascar C. Turkey",
            answer : "Kazakhstan",
            picture: ""
        },
        {
            question : "Which of the following countries has the largest Muslim population in the world? A. Saudi Arabia B. Indonesia C. Iran",
            answer   : "B. Indonesia",
            picture : "/Indonesia.png"
        },
        {
            question : "Which European country is divided into administrative divisions called departments? A. France B. SpainC. Portugal",
            answer   : "A. France",
            picture : "/France.png"
        },
        {
            question : "Mouth Kilimanjaro, the highest mountain in Africa, is located in which country? A. Kenya B. Tanzania C. Lesotho",
            answer   : "B. Tanzania",
            picture : ""
        },
        {
            question : "Which of the following countries is often regarded as the oldest republic in the world? A. Greece B. Italy C. San Marino",
            answer   : "C. San Marino",
            picture : ""
        },
        {
            question : "Which country will host the 2024 Olympics Summer Games? A. France B. Australia C. Japan",
            answer   : "A. France",
            picture : "/France.png"
        },
        {
            question : "Which country has the most islands in the world with more than 221,800? A. Canada B. Norway C. Sweden",
            answer   : "C. Sweden",
            picture :""
        }   
    
    ];

    const [flip, setFlip] = useState(false);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState({ backgroundColor: 'white' });
    const [correctAnswer, setCheckedAnswer] = useState('');
    const [userInput, setUserInput ] = useState('');
    const [correctNbrOfAnswers, setCorrectNumber] = useState(0);
    console.log(userInput);

    //get a rundom number from based on the array length
    const randomNumber = () => setNumber(Math.floor(Math.random() * CardsValue.length));

    const nextNumber = () => {
        if(number == CardsValue.length - 1) {
            setNumber(number)
        } else {
            setNumber(number + 1)
        }
    };

    const prevNumber = () => {
        if(number == 0) {
            setNumber(0);
        }
        if(number > 0) {
            setNumber(number - 1);
        }
        else{
            setNumber(number);
        }
    };

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

    const NumberOfCorrectAnswer = () => setCorrectNumber(number + 1);
    const onCheckAnswer = () => {
        if (CardsValue[number].answer != userInput) {
            setCheckedAnswer('wrong');
            setAnswerColor('red');
        }
        else {
            setCheckedAnswer("correct");
            NumberOfCorrectAnswer();
            setAnswerColor('green');
        }
    }

    return (
        <div className="card-grid">
            <div className="correct-answer">
                <p>Correct Answers: {correctNbrOfAnswers}</p>
                <p>Your input is:</p>
                <p  id={correctAnswer}>{correctAnswer}</p>
            </div>
            <div className={`card ${flip ? "flip" : ""}`} style={color}>
                <div className="front"  onClick={() => setFlip(!flip)}>
                    <p>{CardsValue[number].question}</p>
                    
                </div>
                <div className="back"  onClick={() => setFlip(!flip)}>
                    <p>{CardsValue[number].answer}</p>
                    <img id="image" src={CardsValue[number].picture} alt="" />  
                </div>
                
            </div>
            
            <div className="userInput">
                <label>Type your answer: </label>
                <input 
                    type='text'
                    name="userInput"
                    className="input"
                    value={userInput} 
                    onChange = {(e) => setUserInput(e.target.value)} 
                    
                />
                <button  className="btn-check" onClick={() => {onCheckAnswer()}}>Check Answer</button>
            </div>
           <div className="btn-group">
                <button  className="btn" onClick={() => {prevNumber()}}>Presvious</button>
                <button  className="btn" onClick={() => {nextNumber(); randomColor()}}>Next</button>
                <button  className="btn" onClick={() => {randomNumber(); randomColor()}}>Random</button>
           </div>
                
        </div>
        
    )
}

export default Cards;