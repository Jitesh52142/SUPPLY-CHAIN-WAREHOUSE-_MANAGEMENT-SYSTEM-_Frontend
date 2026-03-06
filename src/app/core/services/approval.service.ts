import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn:'root'
})
export class ApprovalService{

  private api="https://localhost:7036/api/approvals"

  constructor(private http:HttpClient){}

  getPending():Observable<any>{
    return this.http.get(`${this.api}/pending`)
  }

  approve(data:any){
    return this.http.post(`${this.api}/action`,data)
  }

}