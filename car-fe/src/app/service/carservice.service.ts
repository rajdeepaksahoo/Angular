import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarEntity } from '../car-entity';
@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  public id:number;

  private url : string  ="http://localhost:8084/car";
  
  constructor(private http:HttpClient) {

  }
  
  //Show All Cars

  getAllCars(): Observable<CarEntity[]>{
    return this.http.get<CarEntity[]>(`${this.url}/all`);
  }

  //Add Car

  addAllCars(carEntity:CarEntity): Observable<CarEntity[]>{
    return this.http.post<CarEntity[]>(`${this.url}/add`,carEntity);
  }

  updateAllCars(carEntity:CarEntity): Observable<CarEntity>{
    return this.http.put<CarEntity>(`${this.url}/update`,carEntity);
  }


  getCarById(id:number): Observable<CarEntity>{
    return this.http.get<CarEntity>(`${this.url}/one/${id}`);
  }

  deleteCarById(id:number): Observable<CarEntity>{
    return this.http.delete<CarEntity>(`${this.url}/delete/${id}`);
  }

}