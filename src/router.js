import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '@/pages/coaches/CoachesList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachRegistration from '@/pages/coaches/CoachRegistration';
import ContactCoach from '@/pages/request/ContactCoach';
import RequestReceived from '@/pages/request/RequestReceived';
import NotFound from '@/pages/NotFound';
import UserAuth from '@/pages/auth/UserAuth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: 'coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)*', component: NotFound }
  ]
});

export default router;