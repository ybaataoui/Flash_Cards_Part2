
import React, { useState } from "react";
import '../App.css'; 



const Cards = () => {
    const CardsValue = [
        {
            question: "What is the smallest country in the world with an area of only 0.49 square kilometres?",
            answers : ["A. Monaco", "B. Vatican", "C. Andorra"],
            correct: "Vatican",
            picture : ""
        },
        {
            question: "Which of the following countries is not in Central America?",
            answers : ["A. Cuba", "B. Mexico", "C. Uruguay"],
            correct: "Uruguay",
            picture: ""
        },
        {
            question: "What is the second-largest country in the world after Russia?",
            answers : ["A. The United States", "B. Mexico", "C. Canada"],
            correct: "Canada",
            picture: "/canada.png"
        },
        {
            question: "Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean?",
            answers : ["A. Kazakhstan", "B. Madagascar", "C. Turkey"],
            correct: "Kazakhstan",
            picture: ""
        },
        {
            question : "Which of the following countries has the largest Muslim population in the world?",
            answers : ["A. Saudi Arabia", "B. Indonesia", "C. Iran"],
            correct: "Indonesia",
            picture : "/Indonesia.png"
        },
        {
            question : "Which European country is divided into administrative divisions called departments?",
            answers : ["A. France", "B. SpainC", "C. Portugal"],
            correct: "France",
            picture : "/France.png"
        },
        {
            question : "Mouth Kilimanjaro, the highest mountain in Africa, is located in which country?",
            answers : ["A. Kenya", "B. Tanzania", "C. Lesotho"],
            correct: "Tanzania",
            picture : ""
        },
        {
            question : "Which of the following countries is often regarded as the oldest republic in the world?",
            answers : ["A. Greece", "B. Italy", "C. San Marino"],
            correct: "San Marino",
            picture : ""
        },
        {
            question : "Which country will host the 2024 Olympics Summer Games?",
            answers : ["A. France", "B. Australia", "C. Japan"],
            correct: "France",
            picture : "/France.png"
        },
        {
            question : "Which country has the most islands in the world with more than 221,800?",
            answers : ["A. Canada", "B. Norway", "C. Sweden"],
            correct: "Sweden",
            picture :""
        }   
    
    ];


    const [flip, setFlip] = useState(false);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState({ backgroundColor: 'white' });
    const [correctAnswer, setCheckedAnswer] = useState('');
    const [userInput, setUserInput ] = useState('');
    const [correctNbrOfAnswers, setCorrectNumber] = useState(0);
    //console.log(userInput);

    //Make all the answers lower case
    const answersLaowercase = CardsValue[number].answers.map(item => item.toLowerCase());

    //get a rundom number from based on the array length
    const randomNumber = () => {
        setUserInput('')
        setNumber(Math.floor(Math.random() * CardsValue.length));
    }

    //Get the next number to use to get the next card
    const nextNumber = () => {
        if(number == CardsValue.length - 1) {
            setUserInput('')
            setNumber(number)
        } else {
            setUserInput('')
            setNumber(number + 1)
        }
    };

    //Get the previous number to use to get the previous card
    const prevNumber = () => {
        if(number == 0) {
            setUserInput('')
            setNumber(0);
        }
        if(number > 0) {
            setUserInput('')
            setNumber(number - 1);
        }
        else{
            setUserInput('')
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

    //Track the number of correct answers from the user.
    const NumberOfCorrectAnswer = () => setCorrectNumber(number + 1);

    const onCheckAnswer = () => {
        // check if the user input is present in the array of answers.
        if(answersLaowercase.find(e => e.includes(userInput))) {
            console.log(userInput)
            //check if user input is in the correct answer
            if(CardsValue[number].correct.toLowerCase().includes(userInput)){
                //the user input are partially or completly included in the correct answer
                setCheckedAnswer("correct")
                NumberOfCorrectAnswer();
            }
            else{
                //the user input are partially or completly not included in the correct answer, but they are included with the answers options.
                setCheckedAnswer("wrong")
            }
            
        }
        else {
            //The user input are not among the answers option.
            setCheckedAnswer("wrong")
            alert("Your answer isn't even an option!")
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
                    <p>
                        {/* display the answers in from of list */}
                        {CardsValue[number].answers.map((answer) => (
                            <li key={answer}>
                                {answer}
                            </li>
                        ))}
                    </p>
                    
                </div>
                <div className="back"  onClick={() => setFlip(!flip)}>
                    <p>{CardsValue[number].correct}</p>
                    <img id="image" src={CardsValue[number].picture} alt="" />  
                </div>
                
            </div>
            
            <div className="userInput">
                <label>Type your answer: </label>
                <input 
                    type='text'
                    name="userInput"
                    className="input"
                    placeholder="Place your answer her ..."
                    value={userInput.toLowerCase()} 
                    onChange = {(e) => setUserInput(e.target.value)}                     
                />
                <button  className="btn-check" onClick={() => {onCheckAnswer()}}>Check Answer</button>
            </div>
           <div className="btn-group">
                <button  className="btn" onClick={() => {prevNumber(); randomColor()}}>Presvious</button>
                <button  className="btn" onClick={() => {nextNumber(); randomColor()}}>Next</button>
                <button  className="btn" onClick={() => {randomNumber(); randomColor()}}>Shuffle Cards</button>
           </div>
                
        </div>
        
    )
}

export default Cards;