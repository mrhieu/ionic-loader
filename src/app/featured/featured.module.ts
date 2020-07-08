import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedPageRoutingModule } from './featured-routing.module';

import { FeaturedPage } from './featured.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedPageRoutingModule
  ],
  declarations: [FeaturedPage]
})
export class FeaturedPageModule {}
