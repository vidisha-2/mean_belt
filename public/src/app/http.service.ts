import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  pet:any;
  oneId;
  constructor(private _http: HttpClient) { }
  
  getAll(){
    return this._http.get('/api/pets');
  }
  createP(pet){
    return this._http.post('/api/pets/new', pet);
  }

  show(id){
    this.oneId = id;
    return this._http.get('/api/pets/'+id);
  }

  updateInfo(id, newPet){
    return this._http.put(`/api/pets/${id}/edit/`, newPet);
  }

  deleteOnePet(oneId){
    return this._http.delete('/api/pets/'+oneId);
  }

  addLike(id, num){
    return this._http.get('/api/pets/'+id+ '/'+num);
  }

}
