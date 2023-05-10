import { Router } from '@vaadin/router';
import { NavElement } from '../components/nav-element.js';


const outlet = document.getElementById('outlet');
export const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'nav-element', children: [
    {path: '/', component: 'main-element'},
    {path: '/home', component: 'main-element'},
    {path: '/about', component: 'about-element'},
    ]
  },
]);