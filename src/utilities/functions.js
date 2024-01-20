// utilities functions

// function to find correct id with correct prefix zeros
module.exports.correctId = (id)=>{
        try{
            if(isNaN(id))
                return;

            else{
                let curr_id = id;
                let count = 0;

                while(curr_id !== 0){
                    count += 1;
                    curr_id = Math.floor(curr_id/10);
                }

                let totalZeros = 0;

                if(count <= 3)
                    totalZeros = 3 - count;
                    
                const result = "0".repeat(totalZeros) + id;

                return result;
            }
        }catch(error){
            console.log(error);
        }
 
}

// function to fetch pokemons with limit
module.exports.fetchPokemonsList=(API, count, setState)=>{
    fetch(`${API}/?limit=${count}`)
        .then(res => res.json())
        .then(data => setState(data.results))
}

// function to get Id from url
module.exports.getIdFromUrl = (url) => {
    return parseInt(url.substring(34, url.length-1));
}

// function to check filter condition
module.exports.checkFilter = (url, regions, selectedRegion)=>{ 
    if(selectedRegion === 'none')
        return true;

    const id = parseInt(url.substring(34, url.length-1));
    for(let region in regions){
        const regionName = regions[region].name;
        if(regionName === selectedRegion){
            const start = regions[region].startId;
            const end = regions[region].endId;

            if(id >= start && id <= end)
                return true;
            else
                return false;
        }
    }
}