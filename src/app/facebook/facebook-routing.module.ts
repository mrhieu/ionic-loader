import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookPage } from './facebook.page';

const routes: Routes = [
  {
    path: '',
    component: FacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookPageRoutingModule {}
