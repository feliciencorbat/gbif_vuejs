<template>
  <input type="text" class="form-control mb-3" placeholder="Chercher une espèce" id="search" v-model="search">

  <div v-for="species in speciesList" v-bind:key="species.key">
    <div class="card mb-3">
      <div class="card-header">
        {{ species.scientificName }}
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'species', params: { id: species.key }}">Voir l'espèce</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {getSpeciesList} from "@/data/gbifData";

export default {
  data() {
    return {
      speciesList: [],
      search: '',
    }
  },
  methods: {
    getList() {
      getSpeciesList(this.search).then(result => {
        this.speciesList = result;
        console.log(this.speciesList)
      });
    }
  },
  watch: {
    search() {
      this.getList()
    }
  }
}
</script>