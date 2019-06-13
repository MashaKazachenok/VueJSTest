import Main from './components/Main.vue';
import Card from './components/Card.vue';
import Welcome from './components/Welcome.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/main', component: Main },
  { path: '/card/:id', component: Card }
];

export default routes;
