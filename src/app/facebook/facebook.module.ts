import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookPageRoutingModule } from './facebook-routing.module';

import { FacebookPage } from './facebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebookPageRoutingModule
  ],
  declarations: [FacebookPage]
})
export class FacebookPageModule {}
