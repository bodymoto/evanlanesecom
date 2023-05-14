import { Router } from '@vaadin/router';
import { RouterElement } from '../components/router-element.js';
import { HomeElement } from '../components/home-element.js';
import { AboutElement } from '../components/about-element.js';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'router-element', children: [
    {path: '/', component: 'home-element'},
    {path: '/home', component: 'home-element'},
    {path: '/about', component: 'about-element'},
    ]
  },
]);