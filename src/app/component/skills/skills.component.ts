import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 skill: Skill[] = []; 

  constructor(private skills: SkillService, private tokenService : TokenService) { }
  isLogged = false; 

  ngOnInit(): void {
    this.cargarSkills(); 
    if(this.tokenService.getToken()){
      this.isLogged = true; 

    }else{
      this.isLogged = false; 
    }
  }

  cargarSkills(): void{
    this.skills.lista().subscribe(
      data =>{
        this.skill = data; 
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skills.delete(id).subscribe(
        data =>{
          this.cargarSkills(); 

        },err =>{
          alert("No se pudo borra la skill"); 
        }
      )
    }
  }

}
