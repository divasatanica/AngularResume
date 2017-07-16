import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PersonService } from './person.service';
import { SelfEvaluateComponent } from './self-evaluate/self-evaluate.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { InternshipComponent } from './internship/internship.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/selfevaluate',
    pathMatch: 'full'
  },
  {
    path: 'selfevaluate',
    component: SelfEvaluateComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'intern',
    component: InternshipComponent
  },
  {
    path: 'edu',
    component: EducationComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}