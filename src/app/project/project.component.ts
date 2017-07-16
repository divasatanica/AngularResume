import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  person: Person;
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPerson().then(person => this.person = person);
  }

}
