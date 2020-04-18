import Vue from 'vue';
import VueRouter from 'vue-router';
import Country from '../views/Country.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'country',
    component: Country,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
