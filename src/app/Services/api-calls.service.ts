import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calls,Nodes } from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http : HttpClient) { }

  allCalls(offset:number,limit:number){
  return this.http.get<Calls>(`https://frontend-test-api.aircall.io/calls?offset=${offset}&limit=${limit}`);
  }

  singleCall(id:any){
    return this.http.get<Nodes>(`https://frontend-test-api.aircall.io/calls/${id}`);
    }

    User(){
      return this.http.get<any>(' https://frontend-test-api.aircall.io/me');

    }


    callNotes(id: string){
      return this.http.get<any>(`https://frontend-test-api.aircall.io/calls/'${id}'/note`);
      }

      archivedCalls(id: string,data: any){
        return this.http.put<any>(`https://frontend-test-api.aircall.io/calls/'${id}'/archive`,data);
        }
}




