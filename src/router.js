import { createRouter, createWebHashHistory } from 'vue-router'
import ArsenalFacts from './views/ArsenalFacts.vue'
import LeagueTable from './views/LeagueTable.vue'
import TeamName from './views/TeamName.vue'
import NotFound from './views/NotFound.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ArsenalFacts,
      path: '/'
    },
    {
      component: LeagueTable,
      path: '/table'
    },
    {
      component: TeamName,
      path: '/table/:team'
    },
    {
      component: NotFound,
      path: '/:notFound(.*)'
    }
  ]
})
