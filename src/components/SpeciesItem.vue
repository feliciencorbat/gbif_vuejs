<template>
  <div class="card mb-3">
    <div class="card-header">
      <h3>{{ species.scientificName }}</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <p v-if="species.rank">Rang: {{ species.rank }}</p>
          <p v-if="species.taxonomicStatus">Statut: {{ species.taxonomicStatus }}</p>
          <p v-if="species.vernacularName">Nom vernaculaire: {{ species.vernacularName }}</p>
        </div>
        <div class="col-md-6">
          <div id="carouselSpecies" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(image, index)  in speciesImages" :key="image.media[0].identifier" class="carousel-item"
                   :class="index === 0 ? ' active' : ''">
                <img class="d-block w-100" v-bind:src="image.media[0].identifier" :alt="image.media[0].references">
                <div class="carousel-caption d-none d-md-block">
                  <h5 v-if="image.media[0].creator">par {{ image.media[0].creator }}</h5>
                  <p v-if="image.media[0].references">Source: <a :href="image.media[0].references">{{ image.media[0].references }}</a></p>
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
      this.speciesImages = result.results;
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