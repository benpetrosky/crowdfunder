import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], desiredCategory) {
    var output: Project[] = [];
    if(desiredCategory === "ideaProjects"){
      for (var i =0; i < input.length; i++){
        if (input[i].category === "idea") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "projectProjects"){
      for (var i =0; i < input.length; i++){
        if (input[i].category === "project") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "charityProjects") {
      for (var i =0; i < input.length; i++){
        if (input[i].category === "charity") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
