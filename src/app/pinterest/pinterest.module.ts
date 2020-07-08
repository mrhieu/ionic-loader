import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinterestPageRoutingModule } from './pinterest-routing.module';

import { PinterestPage } from './pinterest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinterestPageRoutingModule
  ],
  declarations: [PinterestPage]
})
export class PinterestPageModule {}
