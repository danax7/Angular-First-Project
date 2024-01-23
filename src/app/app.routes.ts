import { Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { DetailsComponent } from './compoents/details/details.component';
import { RegisterComponent } from './compoents/register/register.component';
import { LoginComponent } from './compoents/login/login.component';

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
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register page',
  },
];

export default routeConfig;
