import Vue from 'vue';
import VueRouter from 'vue-router';
import dataComparison from '@/views/dataComparison/index.vue';
import dataTest from '@/views/dataTest/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dataComparison',
    component: dataComparison,
    meta: {
      title: '数据对比',
    },
  },

  {
    path: '/test',
    name: 'dataTest',
    component: dataTest,
    meta: {
      title: '数据测试',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
