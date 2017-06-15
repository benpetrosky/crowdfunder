import { ModuleWithProviders }  from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },{
    path: 'project',
    component: ProjectListComponent
  },{
    path: 'admin',
    component: AdminComponent
  },{
    path: 'projects/:id',
    component: ProjectDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
