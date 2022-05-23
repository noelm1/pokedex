import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() { 
  const [pokemon, setPokemon] = React.useState(null);
  const [id, setId] = React.useState(null);
console.log(pokemon)
  React.useEffect(() => {
      if (!id){
        setId(null);
        return
      }
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
          return response.json()
      })
      .then(data => {
          setPokemon(data)
      })

      .catch(error => {
        alert('we are sorry!!')
      })


      
  },[id]
  )

  function onInputChange(event) {
    setId(event.target.value)

  }



  console.log(id)

//

  
// <img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <header className="App-header">
      
       
        <h1>
        This is my pokedex project! 
        </h1>
       

      
        <input onChange={onInputChange}/> 
          <p>The Pokemon is {pokemon && pokemon.name}</p>
          <br></br>
          <img src= {pokemon?.sprites["front_default"]}/> 
          <br></br>
          <p>The weight of the pokemon is {pokemon && pokemon.weight}</p>
          <br></br>
          <p>The ID of the pokemon is {pokemon && pokemon.id}</p>
          <br></br>
          <p>The height of the pokemon is {pokemon && pokemon.height}</p>
          <br></br>
          <p> The amount of games this pokemon is featured in {pokemon && pokemon.game_indices.length}</p>
         
          
          
      
      </header>

    </div>
  );
}

export default App;
