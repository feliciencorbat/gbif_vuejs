<template>
  <div class="card mb-3">
    <div class="card-header">
      {{ species.scientificName }}
    </div>
    <div class="card-body">
    </div>
  </div>
</template>

<script>

import {getSpecies} from "@/data/gbifData";

export default {
  data() {
    return {
      species: {},
    }
  },
  mounted() {
    getSpecies(this.$route.params.id).then(result => {
      this.species = result;
    });
  }
}
</script>