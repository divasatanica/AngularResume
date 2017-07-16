import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './person.service';
import { SelfEvaluateComponent } from './self-evaluate/self-evaluate.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { InternshipComponent } from './internship/internship.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    SelfEvaluateComponent,
    EducationComponent,
    ProjectComponent,
    InternshipComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
