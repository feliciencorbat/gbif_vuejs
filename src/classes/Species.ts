class Species {
    key: number
    scientificName: string
    constructor(key: number, scientificName: string) {
        this.key = key;
        this.scientificName = scientificName;
    }
}

interface IResponse {
    key: number,
    scientificName: string,
}

module.exports = {
    Species,
    parseAsSpecies(response: IResponse): Species {
        return new Species(
            response.key,
            response.scientificName,
        )
    },
}