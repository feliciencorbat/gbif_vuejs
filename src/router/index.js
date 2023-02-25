import { createRouter, createWebHistory } from 'vue-router'
import SearchSpeciesView from '@/views/SearchSpeciesView.vue'
import SpeciesItemView from "@/views/SpeciesItemView.vue";

const routes = [
  {
    path: '/',
    name: 'searchSpecies',
    component: SearchSpeciesView
  },
  {
    path: '/species/:id',
    name: 'species',
    component: SpeciesItemView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
