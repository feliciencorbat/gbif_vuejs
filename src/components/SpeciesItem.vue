<template>
  <div class="card mb-3">
    <div class="card-header">
      <h3>{{ species.scientificName }}</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <p v-if="species.rank">Rang: {{ species.getRank() }}</p>
          <p v-if="species.taxonomicStatus">Statut: {{ species.getStatus() }}</p>
          <p v-if="species.vernacularName">Nom vernaculaire: {{ species.vernacularName }}</p>
        </div>
        <div class="col-md-6">
          <div id="carouselSpecies" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(image, index)  in speciesImages" :key="image.references" class="carousel-item"
                   :class="index === 0 ? ' active' : ''">
                <img class="d-block w-100" :src="image.identifier" :alt="image.references">
                <div class="carousel-caption d-none d-md-block">
                  <h5 v-if="image.creator">par {{ image.creator }}</h5>
                  <p v-if="image.references">Source: <a :href="image.references">{{ image.references }}</a></p>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselSpecies"
                      data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselSpecies"
                      data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getSpecies, getSpeciesImages} from "@/data/gbifData";

export default {
  data() {
    return {
      species: {},
      speciesImages: []
    }
  },
  mounted() {
    getSpecies(this.$route.params.id).then(result => {
      this.species = result;
    });

    getSpeciesImages(this.$route.params.id).then(result => {
      this.speciesImages = result;
    });
  }
}
</script>

<style scoped>
.carousel-item img {
  object-fit: cover;
  object-position: center;
  height: 50vh;
  overflow: hidden;
}
</style>