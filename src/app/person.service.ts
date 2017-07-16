import { Injectable } from '@angular/core';
import { Person } from './person';
import { People } from './mock-person';

@Injectable()
export class PersonService {
  getPeople(): Promise<Person[]> {
    return Promise.resolve(People);
  }
  getPerson(): Promise<Person> {
    return this.getPeople()
               .then(People => {return People[0];});
  }
}