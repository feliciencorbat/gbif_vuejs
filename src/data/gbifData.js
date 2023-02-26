import axios from "axios";
import {parseAsSpecies} from "@/classes/Species.ts";

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
    const response = await axios.get(baseUrl+'/species/' + id);
    return response.data.map(
        response => parseAsSpecies(response)
    );
}

export { getSpeciesList, getSpecies };