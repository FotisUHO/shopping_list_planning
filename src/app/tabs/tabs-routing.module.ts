import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
    [
        {
            path: 'goals',
            loadChildren: () => import('../goals/goals.module').then( m => m.GoalsPageModule)
        },
        {
            path: 'personas',
            loadChildren: () => import('../personas/personas.module').then( m => m.PersonasPageModule)
        },
        {
            path: 'sketches',
            loadChildren: () => import('../sketches/sketches.module').then( m => m.SketchesPageModule)
        },
        {
            path: 'critique',
            loadChildren: () => import('../critique/critique.module').then( m => m.CritiquePageModule)
        },
        {
            path: 'tech',
            loadChildren: () => import('../tech/tech.module').then( m => m.TechPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
