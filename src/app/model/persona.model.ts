export class persona{
    id?: number;
    // con el ? le estamos indicando que no es necesario el atributo
    nombre: string; 
    apellido : string; 
    descripcion : string; 
    img : string; 

    constructor(nombre: string, apellido: string , img: string, descripcion: string){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.descripcion= descripcion; 
        this.img = img; 
    }
}