import { Router } from '@angular/router';
import { EducacionService } from './../../../service/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
   nombreE: string; 
   descripcionE : string; 

  constructor(private educasionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE); 
    this.educasionS.save(educacion).subscribe(
      data=>{
        alert("Educacion añadida correctamente"); 
        this.router.navigate(['']); 
      }, err=>{
        alert("Falló"); 
        this.router.navigate(['']); 
      }
    )
  }

}
