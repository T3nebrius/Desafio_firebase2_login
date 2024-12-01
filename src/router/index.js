import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser; 
  console.log(user);
  
  if (to.meta.requiresAuth && !user) {
    next('/login'); 
  } else if (!to.meta.requiresAuth && user) {
    next('/home'); 
  } else {
    next();
  }
});
  

export default router;
