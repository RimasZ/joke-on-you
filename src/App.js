import { useEffect, useState } from 'react';
import './App.scss';



function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result.jokes);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div className="App">
      <h1>Jokes for you</h1>
      <ul>
        {
         items.map(item => item.type === 'twopart' ? <li key={item.id}><span>Setup: </span>{item.setup}<span>Delivery: </span>{item.delivery}</li> : <li key={item.id}><span>The Joke:</span>{item.joke}</li> )
        }
      </ul>
    </div>
  );
}
}

export default App;
