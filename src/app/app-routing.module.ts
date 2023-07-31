import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'services', component: ServicesComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'teams', component: TeamsComponent},
  // {path: 'contact', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
