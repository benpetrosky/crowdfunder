import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.css']
})
export class FundFormComponent implements OnInit {
  @Input() selectedProject;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addToFund(fundAmount: number){

    this.projectService.updateFund(this.selectedProject, fundAmount);
  }
}
