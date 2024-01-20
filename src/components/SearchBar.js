import { useState, useEffect } from 'react';

function SearchBar(props){
    const [ searchInput, setSearchInput ] = useState('');
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    function filterSearch(){
        const filteredResults = [];
        
        props.fullPokemonList.map(pokemon => {
            if(pokemon.name.length > searchInput.length){
                const pokemonNameSubstring = pokemon.name.slice(0, searchInput.length);
                if(pokemonNameSubstring === searchInput)
                    filteredResults.push(pokemon);
            }   
        });

        setFilteredPokemonList(filteredResults);
        if(filteredResults.length > 0 && searchInput.length > 0){
            props.onSearch(filteredResults);
        }else{
            props.onSearch(filteredResults);
        }   
    }

    useEffect(()=>{
        props.onSearching(searchInput, false);
    }, [searchInput])

    useEffect(()=>{
        props.onSearching(searchInput, true)
    }, [filteredPokemonList])

    return(
        <div className = 'searchBar flex my-4'>
            <div className = 'searchBar__input w-80 border-2 border-blue-600 rounded-md mr-5'>
                <input 
                    className = 'p-2 rounded-md w-full outline-none' 
                    type = 'text' 
                    placeholder = 'Enter Pokemon Name'
                    onChange = { e =>  setSearchInput(e.target.value.toLowerCase().trim()) }
                    value = { searchInput }
                />
            </div>

            <button onClick = { filterSearch } className = 'searchBar__button flex grow-none font-medium bg-blue-100 hover:bg-blue-300 text-blue-600 p-2 rounded-md shadow-lg'>
                <span className = 'flex items-center md:mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                </span>
                    
            </button>
        </div>
    )
}

export default SearchBar;