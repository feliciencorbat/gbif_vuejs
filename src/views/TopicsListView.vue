<template>
  <div class="container mt-3">
    <TopicsList />
  </div>
</template>

<script>
import TopicsList from "@/components/TopicsList.vue";

export default {
  name: 'TopicsListView',
  components: {
    TopicsList,
  }
}
</script>
