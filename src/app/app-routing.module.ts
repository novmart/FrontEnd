import { EditProyectosComponent } from './component/proyectos/edit-proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './component/proyectos/new-proyectos/new-proyectos.component';
import { EditSkillComponent } from './component/skills/edit-skill.component';
import { EditeducacionComponent } from './component/educacion/editeducacion.component';
import { NeweducacionComponent } from './component/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './component/experencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experencia/new-experiencia/new-experiencia.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSkillComponent } from './component/skills/new-skill.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path : 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editacercade/:id', component:EditAcercaDeComponent },
  { path : 'nuevapro', component: NewProyectosComponent},
  { path : 'editpro/:id', component: EditProyectosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
