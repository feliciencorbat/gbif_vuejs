<template>
  <input type="text" class="form-control mb-3" placeholder="Chercher une espèce" id="search" v-model="search">

  <div v-for="topic in topics" v-bind:key="topic.id">
    <div class="card mb-3">
      <div class="card-header">
        {{ topic.title }}
      </div>
      <div class="card-body">
      </div>
    </div>
  </div>
</template>

<script>

import {getTopicsList} from "@/data/champisData";

export default {
  data() {
    return {
      topics: [],
    }
  },
  mounted() {
    getTopicsList().then(result => {
      this.topics = result;
    });
  }
}
</script>