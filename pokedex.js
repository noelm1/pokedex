import React from 'react';

const poke = () => {
    const [pokemon, setPokemon] = React.useState(null);

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/73')
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        
    })
    return "hello world";
};
