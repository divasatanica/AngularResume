import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  person: Person;
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPerson().then(person => this.person = person);
  }

}
