export class persona{
    id?: number;
    // con el ? le estamos indicando que no es necesario el atributo
    nombre: String; 
    apellido : String; 
    img : String; 

    constructor(nombre: String, apellido: String , img: String){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.img = img; 
    }
}