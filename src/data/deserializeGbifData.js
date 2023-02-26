import {Species} from "@/classes/Species";

function deserializeSpeciesList(serializedSpeciesList) {
    let speciesList = [];
    serializedSpeciesList.forEach(serializedSpecies);
    function serializedSpecies(item) {
        let species = deserializeSpecies(item);
        speciesList.push(species);
    }
    return speciesList;
}

function deserializeSpecies(serializedSpecies) {
    let species = new Species(serializedSpecies.key, serializedSpecies.scientificName)
    return {
        species
    };
}

export { deserializeSpeciesList, deserializeSpecies }