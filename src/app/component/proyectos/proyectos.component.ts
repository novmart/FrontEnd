import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  pro: Proyectos [] = []; 

  constructor(private sProyectos: ProyectosService, private tokenService: TokenService) { }

  isLogged=false; 
  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;

    }else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void{
    this.sProyectos.lista().subscribe(data =>{this.pro = data;})
  
  }
 
 delete(id?:number){
  if(id !=undefined){
    this.sProyectos.delete(id).subscribe(
      data=>{
        this.cargarProyectos();
      }, err =>{
        alert("No se pudo borrar el Proyecto");
      }
    )
  }
 }

}
