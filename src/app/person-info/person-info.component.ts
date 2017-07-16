import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  person: Person;
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this._personService.getPerson().then(person => this.person = person);
  }

}
