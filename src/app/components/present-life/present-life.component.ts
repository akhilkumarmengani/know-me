import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-present-life',
  templateUrl: './present-life.component.html',
  styleUrls: ['./present-life.component.css']
})
export class PresentLifeComponent implements OnInit {

  constructor(private personService:PersonService) { }

  async ngOnInit(): Promise<void> {
    console.log("Akhil "+ (await this.personService.getAboutMe()).name);
  }

}
