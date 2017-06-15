import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService} from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {


  submitForm(title: string, category: string, founder: string, goal: number, plan: string, perk: string) {
    var fund: number = 0;
    var newProject: Project = new Project(title, category, founder, fund, goal, plan, perk);
    this.projectService.addProject(newProject);
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
