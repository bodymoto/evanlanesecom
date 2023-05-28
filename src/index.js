import { Router } from '@vaadin/router';
import { RouterElement } from '../components/router-element.js';
import { HomeElement } from '../components/homepage/home-element.js';
import { AboutElement } from '../components/about/about-element.js';
import { NotFoundElement } from '../components/error/not-found-element.js';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'router-element', children: [
    {path: '/', component: 'home-element'},
    {path: '/home', component: 'home-element'},
    {path: '/home+', component: 'not-found-element'},
    {path: '/about', component: 'about-element'},
    {path: '/home+', component: 'not-found-element'},
    {path: '/(.*)', component: 'not-found-element'},
    ]
  },
  {path: '(.*)', redirect: 'not-found-element'},
]);