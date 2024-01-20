import './HomeBox.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Illustration() {
    const [randomPokemon, setRandomPokemon] = useState(null);
  
    useEffect(() => {
      // Fetch a random Pokémon from the PokeAPI
      fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898) + 1}`)
        .then(response => response.json())
        .then(data => {
          setRandomPokemon({
            id: data.id,
            name: data.name,
            base_exp: data.base_experience,
            height: data.height,
            weight: data.weight,
            type: data.types[0].type.name,
            image_url: {
                svg_url: (data.id < 650) ? `/svg/${data.id}.svg` : data.sprites.front_default,
                sprite: {
                    front: data.sprites.front_default,
                    back: data.sprites.back_default,
                }
            }
          });
        })
        .catch(error => console.error("Error fetching Pokémon data:", error));
    }, []);
  
    return (
      <div className='content__illustration inline-flex flex-col items-center my-3'>
        {randomPokemon && (
          <>
            <img width="200px" height="200px" src = {randomPokemon.image_url.sprite.front} alt = {randomPokemon.name} />
            <p className="text-center mt-2 text-lg font-semibold">{randomPokemon.name}</p>
            <p className="text-center text-gray-500">{`Type: ${randomPokemon.type}`}</p>
          </>
        )}
      </div>
    );
  }

function Heading(){
    return(
        <div className = 'content__heading flex justify-center align-center'>
            <img width = "250px" src='/pokemonLogo.svg' alt='pokemon logo' />
        </div>
    );
}

function GoButton(){
    return(
        <div className = 'content__button flex items-center justify-center my-3'>
            <Link to='/pokemon'>
                <button className='inline-flex items-center  text-blue-800 font-medium bg-blue-100 p-3 rounded-md border-2 border-transparent hover:border-blue-800 hover:bg-blue-200 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600'>
                    <span>
                        <img className = 'mr-3' width = "30px" height = "30px" src = '/pokeball.png' alt = 'pokeball' />
                    </span>
                    Let's Go!
                </button>
            </Link>
        </div>
    );
}

function HomeBox(){
    return(
        <div className = 'homeBox rounded-xl select-none shadow-xl grid grid-cols-1 p-3'>
            <Heading />

            <Illustration />

            <GoButton /> 

            <Footer />
        </div>
    );
}

export default HomeBox;