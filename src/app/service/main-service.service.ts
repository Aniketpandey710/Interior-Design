import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from './constant-api';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
 formData=[]
  constructor(private http:HttpClient) { }

  homeData():Observable<any>{
   return this.http.get<any>(api);
  }
  passData(data){
  this.formData.push(data);
  return this.formData
  }
  component1Data(){
    return this.formData
    }
  removeItem(data){
    const index = this.formData.indexOf(data);
    if (index > -1) {
      this.formData.splice(index, 1);
    }
  }
}
