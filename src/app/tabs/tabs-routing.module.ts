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
        children:
        [
            {
              path: '',
              loadChildren: '../goals/goals.module#GoalsPageModule'
            }
        ]
      },
      {
        path: 'personas',
        children:
            [
              {
                path: '',
                loadChildren: '../personas/personas.module#PersonasPageModule'
              }
            ]
      },
      {
        path: 'sketches',
        children:
            [
              {
                path: '',
                loadChildren: '../sketches/sketches.module#SketchesPageModule'
              }
            ]
      },
      {
        path: 'critique',
        children:
            [
              {
                path: '',
                loadChildren: '../critique/critique.module#CritiquePageModule'
              }
            ]
      },
      {
        path: 'tech',
        children:
            [
              {
                path: '',
                loadChildren: '../tech/tech.module#TechPageModule'
              }
            ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
