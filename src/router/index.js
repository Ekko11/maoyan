import Vue from 'vue'
import Router from 'vue-router'
import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"
Vue.use(Router)

export default new Router({
  routes: [
    movie,
    cinema,
    mine
  ]
})
