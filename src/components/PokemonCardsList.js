import { useEffect, useState } from 'react';
import './PokemonCardsList.css';

import config_values from '../utilities/config';
import { checkFilter, getIdFromUrl } from '../utilities/functions';

// importing components
import PokemonCards from './PokemonCards';
import LoadingButton from './LoadingButton';


function PokemonCardsList(props){
    const [pokemonCount, setPokemonCount] = useState(config_values.POKEMON_COUNT);
    const [isLoading, setIsLoding] = useState(false);
    const [showLoadButton, setShowLoadButton] = useState(true);
    let lastPokemonId = 0;

    useEffect(()=>{isButtonUp()}, [pokemonCount]);

    // function to create pokemoncards component list
    function cardsList(){
        let count = 0;
        const list = props.fullPokemonList.map(pokemon => {
            if(checkFilter(pokemon.url, config_values.REGIONS, props.regionFilter) && count < pokemonCount){
                count += 1;
                lastPokemonId = (getIdFromUrl(pokemon.url));
                return <PokemonCards
                    key = {'pokemonid-' + pokemon.name}
                    name = {pokemon.name}
                    url = {pokemon.url}
                />
            }
        });

        return list;
    }

    // function to load more pokemons
    function loadMorePokemons(){
        setIsLoding(true);
        setTimeout(()=>{
            setPokemonCount(pokemonCount + config_values.POKEMON_COUNT);
            setIsLoding(false);
        }, config_values.TIMEOUT_INTERVAL)
    }

    // function to decide whether to show load more button or not
    function isButtonUp(){
        const indexOfRegion = config_values.REGIONS_IDX.indexOf(props.regionFilter);
        let regionPokemonCount = 0;
        if(props.regionFilter !== "none")
            regionPokemonCount = config_values.REGIONS[indexOfRegion].endId;
        else
            regionPokemonCount = config_values.TOTAL_NUMBER_OF_POKEMONS;


        if(regionPokemonCount > lastPokemonId)
            setShowLoadButton(true);
        else
            setShowLoadButton(false);
    }

    return(
        <div className = 'flex flex-col items-center justify-center my-5 select-none'>
            <div className='pokemonCardsList rounded-md grid grid-cols-1 md:grid-cols-3'>
                { 
                    cardsList()
                }
            </div>

            <div
                className = {
                    `${ 
                        showLoadButton
                            ? 
                        'block' 
                            : 
                        'hidden'
                    } pokemonCardList__button my-5`
                }
            >
                <LoadingButton loadMore = {loadMorePokemons} loading = {isLoading} />
            </div>
        </div>       
    );
}

export default PokemonCardsList;