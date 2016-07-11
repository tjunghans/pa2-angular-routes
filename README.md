# AngularRoutes Component 

This component is part of the [Practical Angular 2 book](https://leanpub.com/practical-angular-2).

## Summary: Creating routes in Angular

These are just notes and snippets. You can peek at the source code to see how
the Angular Router works.

The Angular router is not part of the Angular core library and needs to be installed
and imported separately (npm i @angular/router). Currently the latest version of @angular/router is 3.0.0-beta.2.

A route configuration is required where the each route and its path are described. The router configuration is stored in a separate file `app.routes.ts`:

```
import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { LoginComponent }  from './login/login.component';
import { DashboardComponent }  from './dashboard/dashboard.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
```

The router outlet component is included in the application markup. The router
outlet component is the placeholder of the routed component. ***Source: app.component.html**.

```
<div class="outer-outlet">
  <router-outlet></router-outlet>
</div>
```

**Source: app.component.ts**
```
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
            <h1>My First Angular 2 App</h1>
            <div><router-outlet></router-outlet></div>
            `
})
export class AppComponent { }
```

The router directives `ROUTER_DIRECTIVES` are imported by the app.

Using the `routeLink` and the route paths, a navigation can be created.

**Source: app.component.html**

```
<nav>
  <a href="#" [routerLink]="['/home']">Home</a>
  <a href="#" [routerLink]="['/login']">Login</a>
  <a href="#" [routerLink]="['/dashboard']">Dashboard</a>
</nav>
<div class="outer-outlet">
  <router-outlet></router-outlet>
</div>
```

Create a component for each route, for example **HomeComponent**, with its
respective **ts** and **html** files.

Add the `APP_ROUTER_PROVIDERS` to the application bootstrap.

**Source: boot/main.ts**

``` 
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);
```