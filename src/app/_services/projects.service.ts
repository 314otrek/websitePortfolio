import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =[ 
    {id: 0, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 1, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 2, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 3, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 4, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 5, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 6, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.PYTHON, Tag.LANGCHAIN ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]},
    {id: 7, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.JAVA ], pictures: ["../../assets/image.png","../../assets/image.png","../../assets/image.png"]}
    
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  getProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('There is no project with matched id: '+ id);
    }

    return project;
  }

  GetProjectByFilter(filteredTag: Tag[]){
    let filteredPojects: Project[] = [];

    this.projects.forEach(function(project){
      let foundall = true;

      filteredTag.forEach(function(filteredTag){
        if(project.tags.includes(filteredTag) == false){
          foundall = false;
        }
      });
      if(foundall){
        filteredPojects.push(project);
      }
    });

    return filteredPojects;
  }
}
