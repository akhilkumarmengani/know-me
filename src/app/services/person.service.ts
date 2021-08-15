import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import * as data from '../../assets/data.json';
import {me} from '../models/me';

import {WorkExp} from '../models/WorkExp';
import { Project } from '../models/project';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  aboutme : me;
  workexperiences : WorkExp;
  projects : Project;
  skills : Skills;
  constructor(private httpClient: HttpClient) { 
    this.aboutme = new me();
    this.workexperiences = new WorkExp();
    this.projects = new Project();
    this.skills = new Skills();
  }

  async getData(): Promise<any>{
    //this.pdata = <any[]>data;
    //return this.httpClient.get<any[]>('../../assets/data.json');

    await fetch('../../assets/data.json').then(results => results.json()).then(json => {
         this.aboutme = json.aboutme;
         this.workexperiences = json.workexperiences;
         this.projects = json.projects;
         this.skills = json.skills;
    });

    //console.log(this.aboutme.name);
  }

  async getAboutMe():Promise<me>{ 
    await fetch('../../assets/data.json').then(results => results.json()).then(json => {
      this.aboutme = json.aboutme;
    });
    return this.aboutme;
  }
}
