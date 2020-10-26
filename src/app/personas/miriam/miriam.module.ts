import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiriamPageRoutingModule } from './miriam-routing.module';

import { MiriamPage } from './miriam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiriamPageRoutingModule
  ],
  declarations: [MiriamPage]
})
export class MiriamPageModule {}
