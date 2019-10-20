import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      //'Authorization': 'Bearer c4d01ae5'
    })
  }

  get(select,data=null):Observable<any>{
    return this.httpClient.get(this.getApiUrls(select,data));
  }


  getApiUrls(select, data){
    switch(select){
      case "movies":        
        return "http://www.omdbapi.com/?s=tokyo&type=movie&page="+data+"&apikey=c4d01ae5";
      case "moviesDetail":
          return "http://www.omdbapi.com/?i="+data+"&apikey=c4d01ae5";
      default: 
        return "http://www.omdbapi.com/?s=tokyo&type=movie&page=1&apikey=c4d01ae5";
    }
  }

}
