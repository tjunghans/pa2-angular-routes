import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { LoginComponent }  from './login/login.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
// import { HeroListComponent }    from './hero-list.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];