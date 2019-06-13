import Main from './components/Main.vue';
import Welcome from './components/Welcome.vue';

const routes = [
  { path: '/', component: Welcome },
  {
    path: '/main',
    component: Main
  }
];

export default routes;
