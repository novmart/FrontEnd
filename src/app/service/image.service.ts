import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
 url: string = ""; 
  constructor(private storage: Storage) { }
 //subir las imagenes 
  public uploadImage($event: any, name: string){
     const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/'+ name)
  uploadBytes(imgRef, file)
  .then(response =>{this.getImages()})
  .catch(error => console.log(error))
  
  }
 //traer las imagenes
  getImages(){
  const imagesRef = ref(this.storage, 'imagen')
  list(imagesRef)
  //hago un for para que me escanee las imagenes y que me espere la respuesta del archivo(url)
  .then(async response =>{
    for(let item of response.items){
      this.url = await getDownloadURL(item);
      console.log("La url es: " + this.url); 
    }
  })
  .catch(error => console.log(error))
}
}
