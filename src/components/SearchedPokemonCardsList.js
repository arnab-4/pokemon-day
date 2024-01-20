import './SearchedPokemonCardsList.css';
import config_values from '../utilities/config';

// importing components
import PokemonCards from "./PokemonCards";


function SearchedPokemonCardsList(props){
    function findIdUsingURL(url){
        const id = url.substring(34, url.length-1);
        return parseInt(id);
    }

    function checkFilter(pokemon){
        if(props.regionFilter === 'none')
            return true;

        const id = findIdUsingURL(pokemon.url);
        for(let region in config_values.REGIONS){
            const regionName = config_values.REGIONS[region].name;
            if(regionName === props.regionFilter){
                const start = config_values.REGIONS[region].startId;
                const end = config_values.REGIONS[region].endId;

                if(id >= start && id <= end)
                    return true;
                else
                    return false;
            }
        }
    }

    function NotFound(){
        return(
            <div className = 'bg-amber-400 p-2'>
                Not Found
            </div>
        );
    }

    function cardsList(){
        if(props.pokemonList.length === 0)
            alert("Not Found");

        else{
            const list = props.pokemonList.map(pokemon => {
                if(checkFilter(pokemon)){
                    return <PokemonCards
                        key = {'pokemonid-' + pokemon.name}
                        name = {pokemon.name}
                        url = {pokemon.url}
                    />
                }
            })
    
            return list;
        }   
    }

    return(
        <div className = 'flex flex-col items-center justify-center my-5'>
            <div className='pokemonCardsList rounded-md grid grid-cols-1 md:grid-cols-3'>
                { 
                    cardsList()
                }
            </div>
        </div>    
    )
}

export default SearchedPokemonCardsList;