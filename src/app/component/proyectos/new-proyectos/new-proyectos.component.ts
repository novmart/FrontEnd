import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombrePro:string = '';
  descripcionPro:string = '';
  fechaPro:string ='';
  linkPro: string = ''; 
  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pro = new Proyectos(this.nombrePro, this.descripcionPro, this.fechaPro, this.linkPro);
    this.sProyectos.save(pro).subscribe(
      data=> {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']); 
      }
    )
  }

}
