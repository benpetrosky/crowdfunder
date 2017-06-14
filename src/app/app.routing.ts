import { ModuleWithProviders }  from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },{
    path: 'project',
    component: ProjectListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
