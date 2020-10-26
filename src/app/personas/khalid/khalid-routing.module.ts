import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhalidPage } from './khalid.page';

const routes: Routes = [
  {
    path: '',
    component: KhalidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhalidPageRoutingModule {}
