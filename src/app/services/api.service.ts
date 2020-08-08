import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kamera} from '../model/kamera';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // Url of the server http://<host>:<port>/
  static baseUrl: string = environment.apiUrl; 
  static Url(url) {
    return this.baseUrl + url;
}
//metoda per te marr thirrjet Rest Api per te ruajtur ne database
//ApiService eshte emri i klases
  public saveKamera(kamera:Kamera){
    return this.http.post(ApiService.Url('kamera/save'),kamera)
  }
  public deleteKamera(id:String){
    return this.http.delete(ApiService.Url('kamera/delete/'+id))
  }
  public getAll(){
    return this.http.get(ApiService.Url('kamera/getAll'))
  }
  public getByEmer(emer:String){
    return this.http.get(ApiService.Url('kamera/getByEmer/'+ emer))
  }
  public getByModel(model:String){
    return this.http.get(ApiService.Url('kamera/getByModel/'+ model))
  }
  public getByRezolucion(rezolucion:String){
    return this.http.get(ApiService.Url('kamera/getByRezolucion/'+ rezolucion))
  }
  public getByIp(ip:String){
    return this.http.get(ApiService.Url('kamera/getByIp/'+ ip))
  }
  public groupByRezolucion(){
    return this.http.get(ApiService.Url('kamera/groupByRezolucion'))
  }
}
