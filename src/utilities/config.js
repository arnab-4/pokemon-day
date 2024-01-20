// configuration values of application

const config_values = {
    POKEMON_API : 'https://pokeapi.co/api/v2/pokemon',
    POKEMON_COUNT : 12,
    TIMEOUT_INTERVAL : 1500,
    TOTAL_NUMBER_OF_POKEMONS : 1118,
    REGIONS: [
        {
            id: 1,
            name: "Kanto",
            startId: 1,
            endId: 151,
        },
        {
            id: 2,
            name: "Johto",
            startId: 152,
            endId: 251,
        },
        {
            id: 3,
            name: "Hoenn",
            startId: 252,
            endId: 386,
        },
        {
            id: 4,
            name: "Sinnoh",
            startId: 387,
            endId: 493,
        },
        {
            id: 5,
            name: "Unova",
            startId: 494,
            endId: 649
        },
        {
            id: 6,
            name: "Kalos",
            startId: 650,
            endId: 721,
        },     
    ],
    REGIONS_IDX: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos"],
    TYPE_COLORS: {
        normal: "bg-neutral-400",
        fire: "bg-orange-600",
        water: "bg-sky-500",
        grass: "bg-lime-500",
        electric: "bg-yellow-400",
        ice: "bg-teal-200",
        fighting: "bg-yellow-800",
        poison: "bg-fuchsia-600",
        ground: "bg-amber-700",
        flying: "bg-cyan-300",
        psychic: "bg-purple-600",
        bug: "bg-lime-700",
        rock: "bg-yellow-800",
        ghost: "bg-indigo-500",
        dragon: "bg-sky-700",
        dark: "bg-stone-700",
        steel: "bg-gray-600",
        fairy: "bg-rose-600",
    }
}

export default config_values;