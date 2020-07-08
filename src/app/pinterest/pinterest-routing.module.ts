import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinterestPage } from './pinterest.page';

const routes: Routes = [
  {
    path: '',
    component: PinterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinterestPageRoutingModule {}
