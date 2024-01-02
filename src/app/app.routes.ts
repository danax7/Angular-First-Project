import { Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { DetailsComponent } from './compoents/details/details.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
