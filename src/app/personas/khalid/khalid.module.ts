import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhalidPageRoutingModule } from './khalid-routing.module';

import { KhalidPage } from './khalid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhalidPageRoutingModule
  ],
  declarations: [KhalidPage]
})
export class KhalidPageModule {}
