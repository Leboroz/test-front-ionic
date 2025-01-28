import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'students',
        children: [
          {
            path: '',
            loadChildren: () => import('../students/student.module').then(m => m.StudentPageModule),
          },
          {
            path: ':id',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
          }
        ]
      },
      {
        path: 'tutors',
        loadChildren: () => import('../tutors/tutors.module').then(m => m.TutorsPageModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('../classes/classes.module').then(m => m.ClassesPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
