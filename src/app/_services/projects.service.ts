import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =[ 
    {id: 0, name: 'Chat with Pdf', summary: 'Application which enable a user, make a conversation with his own data in pdf files', description: 'Simple web Application wrote in Python with Stremilit and Langchain. Application enable user to upload multi files in pdf format process them and finally extract data from this files by asking a questions', prjectLink: 'https://github.com/314otrek/ChatWithPdf/tree/master', tags: [ Tag.PYTHON, Tag.LANGCHAIN, Tag.STREAMLIT ], pictures: ["../../assets/chat-with-pdf.png","../../assets/chat-with-pdf-2.png"]},
    {id: 1, name: 'Full Stack Crud App', summary: 'Full Stack Crud App', description: 'Simple Web Application wrote with Java and Spring boot on backend and Angular Html and CSS on Frontend. Application enables users to add read delete and edit customers.', prjectLink: 'https://github.com/314otrek/FullStack-crud-app', tags: [ Tag.SPRINGBOOT, Tag.TYPESCRIPT, Tag.JAVA, Tag.HTML, Tag.CSS, Tag.ANGULAR ], pictures: ["../../assets/full-stack-app-1.png", "../../assets/full-stack-2.png", "../../assets/full-stack-pe3.png"]},
    {id: 2, name: 'Website Scrapper', summary: 'Application Scrapping data from website', description: 'Web Scrapping application wrote in python with Streamlit and Langchain. For example we are able to apload link for any offert and ask about qualification we need to apply for this job', prjectLink: '', tags: [ Tag.LANGCHAIN, Tag.STREAMLIT, Tag.PYTHON ], pictures: ["../../assets/web-scrap1.png"]},
    {id: 3, name: 'Family Tree', summary: 'Console Java App of Family Tree', description: 'Studies project. Console App wrote in Java. Application enable user to create a Family Tree. The family Tree can be read by file if its in good form. A user can add new family members, display information about full family tree or about particular person', prjectLink: 'https://github.com/314otrek/FamilyTreeConsoleApp', tags: [ Tag.JAVA ], pictures: ["../../assets/family1.png","../../assets/family2.png","../../assets/family3.png"]},
    {id: 4, name: 'Ant Colony Optimization', summary: 'Studies Project. Simple Ant Colony Optimization project wrote in python', description: 'The simple project which is showing how works Ant Colony Optimization Problem. User can modify number of ants and number of points. The idea is we have a graph. The road from one edge to anather keep sepcific value. The idea of algorith is to create a path which make most cheapest road beetween all edges', prjectLink: '', tags: [ Tag.PYTHON ], pictures: ["../../assets/ant3.png","../../assets/ant1.png","../../assets/ant2.png"]},
    {id: 5, name: 'Expert System', summary: 'Expert System to determine illnesses', description: 'Studied Project. Idea was create simple Expert System which can determine possible ilnesses. Application i getting basic information about customer (shown on images) and depends on that try to determine any ilness', prjectLink: '', tags: [ Tag.PYTHON ], pictures: ["../../assets/axpert1.png","../../assets/expert2.png"]},
    
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
