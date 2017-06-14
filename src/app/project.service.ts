import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  getProjects() {
    return this.projects;
  }

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

}
