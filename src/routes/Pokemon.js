import config_values from '../utilities/config';
import { fetchPokemonsList } from '../utilities/functions';

// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";
import SearchedPokemonCardsList from "../components/SearchedPokemonCardsList";
import SearchingTemplate from '../components/SearchingTemplate';

import { useState, useEffect } from "react";



function Pokemon(){
    const [isSearched, setIsSearched] = useState(false);
    const [isSearchButton, setIsSearchButton] = useState(false);
    const [filterValue, setFilterValue] = useState("none");
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);
    const [fullPokemonList, setFullPokemonList] = useState([]);

    useEffect(()=>{
        fetchPokemonsList(config_values.POKEMON_API, config_values.TOTAL_NUMBER_OF_POKEMONS, setFullPokemonList);
    }, [])

    function searchPokemon(filteredList){
        setPokemonFilteredList(filteredList);
    }

    function isSearching(searchInput, buttonState){
        if(searchInput.length !== 0)
            setIsSearched(true);
        else
            setIsSearched(false);

        setIsSearchButton(buttonState);
    }

    function isFilterOn(value){
        setFilterValue(value);
    }

    return(
        <>
            <GoToTop />
            <PokemonHeader
                onSearch = { searchPokemon } 
                onSearching = { isSearching }  
                onFilter = { isFilterOn }
                fullPokemonList = {fullPokemonList}
            />
            
            { 
                isSearched ? 
                     isSearchButton  ? 
                        <SearchedPokemonCardsList 
                            pokemonList = {pokemonFilteredList}
                            regionFilter = {filterValue}
                        />
                            : 
                        <SearchingTemplate />
                    : 
                 <PokemonCardsList 
                    regionFilter = {filterValue}
                    fullPokemonList = {fullPokemonList}
                 /> 
            }
        </>    
    );
}

export default Pokemon;