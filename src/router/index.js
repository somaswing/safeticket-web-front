import Vue from 'vue';
import Router from 'vue-router';
import MainView from '@/views/MainView';
import APIView from '@/views/APIView';
import DemoView from '@/views/DemoView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
    },
    {
      path: '/api',
      name: 'APIView',
      component: APIView,
    },
    {
      path: '/demo',
      name: 'DemoView',
      component: DemoView,
    },
  ],
});
