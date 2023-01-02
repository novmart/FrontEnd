import { ImageService } from './../../service/image.service';
import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona : persona = null; 
  constructor(private activatedRouter: ActivatedRoute,private personaService: PersonaService, private router: Router, public imageService : ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; 
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data; 
      }, err=>{
        alert("Error al modificar"); 
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
    
  }
 

  uploadImage($event: any){
        const id = this.activatedRouter.snapshot.params['id'];
       const name = "perfil_" + id; //name va a quedar formado cmo perfil_name y el id del usuario
        this.imageService.uploadImage($event, name)
  }

}




