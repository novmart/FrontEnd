import { VirtualTimeScheduler } from "rxjs";

export class LoginUsuario {
    nombreUsuario: string; 
    password: string; 


    constructor(nombreUsuario:string, password:string){
        this.nombreUsuario = nombreUsuario; 
        this.password = password; 
    }
}
