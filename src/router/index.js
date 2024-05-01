import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MissionsView from '../views/MissionsView.vue';
import MyProfileView from '../views/MyProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/missions',
      name: 'missions',
      component: MissionsView,
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: MyProfileView,
    },
  ],
});

export default router;
