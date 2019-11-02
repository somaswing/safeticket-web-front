import Vue from 'vue';
import Router from 'vue-router';
import MainView from '@/views/MainView';
import APIView from '@/views/APIView';
import DemoView from '@/views/DemoView';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // specify offset of the element
      if (to.hash === '#about') {
        position.offset = { y: 0 };
      }

      if (to.hash === '#team') {
        position.offset = { y: 0 };
      }
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
      meta: { scrollToTop: true },
    },
    {
      path: '/api',
      name: 'APIView',
      component: APIView,
      meta: { scrollToTop: true },
    },
    {
      path: '/demo',
      name: 'DemoView',
      component: DemoView,
      meta: { scrollToTop: true },
    },
  ],
});
