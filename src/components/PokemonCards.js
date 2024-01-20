import { useState, useEffect } from 'react';

import './PokemonCards.css';

import { correctId } from '../utilities/functions';
import config_values from '../utilities/config';

// importing components
import Modal from './Modal';

function PokemonCards(props){
    const [pokemonData, setPokemonData] = useState({
        id: 0,
        name: '',
        base_exp: 0,
        height: 0,
        weight: 0,
        types: [],
        image_url: {
            svg_url: '',
            sprite: {
                front: '',
                back: ''
            }
        },
    });

    const [isOpen, setIsOpen] = useState(false);

    function closeModal(){
        setIsOpen(false);
    }

    function openModal(){
        setIsOpen(true);
    }

    function findPokemonType(types){
        const types_arr = [];

        types.map(type => {
            types_arr.push(type.type.name);
        })
        
        return types_arr;
    }

    useEffect(()=>{
        fetch(props.url)
            .then(res => res.json())
            .then(data => {
                setPokemonData({
                    id: data.id,
                    name: data.name,
                    base_exp: data.base_experience,
                    height: data.height,
                    weight: data.weight,
                    types: findPokemonType(data.types),
                    image_url: {
                        svg_url: (data.id < 650) ? `/svg/${data.id}.svg` : data.sprites.front_default,
                        sprite: {
                            front: data.sprites.front_default,
                            back: data.sprites.back_default,
                        }
                    },
                })
            });
    }, [])

    return(
        <>
            <div onClick={openModal} className = 'cardContainer m-3 p-2'>
                <div className = 'card cursor-pointer rounded-lg flex flex-col'>
                    <div className = 'card__image bg-blue-100 flex items-center justify-center'>
                        <img width="200px" height="200px" src = {pokemonData.image_url.sprite.front} alt = {props.name} />
                    </div>

                    <div className = 'card__description'>
                        <div className = 'card__subtitle px-3'>
                            { "#" + correctId(pokemonData.id) }
                        </div>
                        <div className = 'card__title p-3'>
                            { props.name.toUpperCase() }
                        </div>
                    </div>      
                </div> 
            </div>

            <Modal data = { pokemonData } isOpen = {isOpen} closeModal = { closeModal } />
        </>
    );
}

export default PokemonCards;