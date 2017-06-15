import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title, category: localUpdatedProject.category, founder: localUpdatedProject.founder, goal: localUpdatedProject.goal, plan: localUpdatedProject.plan, perk: localUpdatedProject.perk})
  }

  deleteProject(localProjectToDelete) {
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

}
