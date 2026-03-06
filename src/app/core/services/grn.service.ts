import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
providedIn:'root'
})
export class GrnService{

private api='https://localhost:7036/api/grn'

constructor(private http:HttpClient){}

getAll():Observable<any>{
return this.http.get(this.api)
}

create(payload:any){
return this.http.post(this.api,payload)
}

addItems(grnId:number,payload:any){
return this.http.post(`${this.api}/${grnId}/items`,payload)
}

}