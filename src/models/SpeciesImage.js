import {Expose} from 'class-transformer'

class SpeciesImage {
    @Expose()
    identifier;

    @Expose()
    references;

    @Expose()
    creator;
}

export default SpeciesImage;