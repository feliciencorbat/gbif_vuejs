import {Expose} from 'class-transformer'

class Species {
    @Expose()
    key;

    @Expose()
    scientificName;

    @Expose()
    vernacularName;

    @Expose()
    rank;
    
    @Expose({ name: 'taxonomicStatus'})
    status;
    
    @Expose()
    getRank() {
        if (this.rank === "SPECIES") {
            return "Espèce";
        } else if (this.rank === "GENUS") {
            return "Genre";
        } else {
            return this.rank;
        }
    }

    @Expose()
    getStatus() {
        if (this.taxonomicStatus === "ACCEPTED") {
            return "Accepté";
        } else {
            return this.taxonomicStatus;
        }
    }
}

export default Species;