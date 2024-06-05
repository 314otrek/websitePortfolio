import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =[ 
    {id: 0, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 1, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 2, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 3, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 4, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 5, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 6, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []},
    {id: 7, name: 'Sample Angular App', summary: 'Text Description', description: '', prjectLink: '', tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ], pictures: []}
    
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
}
