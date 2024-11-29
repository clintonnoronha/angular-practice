import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { pageResolver } from './resolvers/pages.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    // lazy loading
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'pages/:pageNumber',
    component: PageComponent,
    resolve: {
      data: pageResolver,
    },
  },
  // redirect old url to new url above
  {
    path: 'old-pages/:pageNumber',
    redirectTo: (route) => `/pages/${route.params['pageNumber']}`,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
