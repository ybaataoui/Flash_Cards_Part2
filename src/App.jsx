import './App.css';
import Cards from "./components/card";

const App = () => {
  return (
    <div className="container" >
      <div className='title'>
        <h1>The Ultimate Countries Guide!!!</h1>
        <p><b>Let's see how good are you in countries? Test your knowledge about the world!</b></p>
        <p>Number of cards: <b>10</b></p>
        
      </div>
      <div>
        <Cards />
      </div>   
    </div>
  )
}


export default App;