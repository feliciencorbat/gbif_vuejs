<template>
  <div v-for="topic in topics" :key="topic.id">
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