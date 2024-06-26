import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;


  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Piotr Zawadzki - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }


    if(this.typescript ){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }


  ResetFilters(){
    this.typescript = false;


    this.filtering = false;
    this.projects = this.projectService.GetProjects();

  }
}
