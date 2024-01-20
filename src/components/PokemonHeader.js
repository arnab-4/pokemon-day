import './PokemonHeader.css';

// importing components
import Filter from './Filter';
import SearchBar from './SearchBar';


function Heading(){
    return(
        <div className = 'flex justify-start align-center my-4'>
            <img width = "250px" src='/pokemonLogo.svg' alt='pokemon logo' />
        </div>
    );
}


// pokemon header component
function PokemonHeader(props){
    return(
        <div className = 'header__wrapper flex justify-center items-center select-none mt-5'>
            <div className = 'header p-4 rounded-xl shadow-lg'>
                <Heading />

                <div className = 'menu flex flex-col md:flex-row md:justify-between md:px-5'>
                    <SearchBar 
                        onSearch = { props.onSearch } 
                        onSearching = { props.onSearching }
                        fullPokemonList = { props.fullPokemonList }
                    />

                    <Filter onFilter = { props.onFilter } />
                </div>
            </div>
        </div>    
    )
}

export default PokemonHeader;