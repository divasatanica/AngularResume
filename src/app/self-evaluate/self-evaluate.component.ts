import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'self-evaluate',
  templateUrl: './self-evaluate.component.html',
  styleUrls: ['./self-evaluate.component.css']
})
export class SelfEvaluateComponent implements OnInit {
  person: Person;
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPerson().then(person => this.person = person);
  }

}
