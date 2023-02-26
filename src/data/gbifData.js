import axios from "axios";

const baseUrl = 'https://api.gbif.org/v1';
async function getSpeciesList(search) {
    let speciesList;
    const response = await axios.get(baseUrl+'/species/suggest', {
        params: {
            q: search,
        }
    });
    speciesList = response.data
    return speciesList;
}

async function getSpecies(id) {
    let species;
    const response = await axios.get(baseUrl+'/species/' + id);
    species = response.data;
    return species;
}

export { getSpeciesList, getSpecies };