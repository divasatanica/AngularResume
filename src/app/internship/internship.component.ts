import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  person: Person;
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPerson().then(person => this.person = person);
  }

}
