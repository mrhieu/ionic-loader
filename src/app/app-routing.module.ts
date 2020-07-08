import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'featured',
    pathMatch: 'full'
  },
  {
    path: 'featured',
    loadChildren: () => import('./featured/featured.module').then( m => m.FeaturedPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./facebook/facebook.module').then( m => m.FacebookPageModule)
  },
  {
    path: 'pinterest',
    loadChildren: () => import('./pinterest/pinterest.module').then( m => m.PinterestPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
