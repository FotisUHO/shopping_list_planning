import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasPage } from './personas.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasPage,
    children:
    [
      {
        path: 'miriam',
        loadChildren: () => import('./miriam/miriam.module').then( m => m.MiriamPageModule)
      },
      {
        path: 'khalid',
        loadChildren: () => import('./khalid/khalid.module').then( m => m.KhalidPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasPageRoutingModule {}
