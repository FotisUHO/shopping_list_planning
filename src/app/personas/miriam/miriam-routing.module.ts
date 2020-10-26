import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiriamPage } from './miriam.page';

const routes: Routes = [
  {
    path: '',
    component: MiriamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiriamPageRoutingModule {}
