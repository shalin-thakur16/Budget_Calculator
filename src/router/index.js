import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/nav',
    name: 'navigation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Navigation.vue')
  },
  // {
  //   path: '/budget',
  //   name: 'budget',
  //   component: () => import ('../views/BudgetView.vue')
  // },
  // {
  //   path: '/expenses',
  //   name: 'expenses',
  //   component: () => import ('../views/ExpensesView.vue')
    
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
