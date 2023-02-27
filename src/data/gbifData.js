import axios from "axios";
import Species from '../models/Species'
import {plainToClass} from 'class-transformer';

const baseUrl = 'https://api.gbif.org/v1';

async function getSpeciesList(search) {
    let speciesList;
    const response = await axios.get(baseUrl+'/species/suggest', {
        params: {
            q: search,
        }
    });
    let list = response.data
    speciesList = [];
    list.map(species => (
        speciesList.push(
            plainToClass(Species, species, { excludeExtraneousValues: true })
            )
        )
    )
    return speciesList;
}

async function getSpecies(id) {
    let species;
    const response = await axios.get(baseUrl+'/species/' + id);
    species = plainToClass(Species, response.data, { excludeExtraneousValues: true });
    return species;
}

async function getSpeciesImages(id) {
    let speciesImages;
    const response = await axios.get(baseUrl+'/occurrence/search/?mediaType=StillImage&limit=20&taxon_key=' + id);
    speciesImages = response.data;
    return speciesImages;
}

export { getSpeciesList, getSpecies, getSpeciesImages };