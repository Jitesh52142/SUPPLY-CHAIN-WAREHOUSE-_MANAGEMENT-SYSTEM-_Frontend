import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
providedIn:'root'
})
export class VendorService{

private api="https://localhost:7036/api/vendors"

constructor(private http:HttpClient){}

getVendors():Observable<any>{
return this.http.get(this.api)
}

createVendor(data:any){
return this.http.post(this.api,data)
}

updateVendor(id:number,data:any){
return this.http.put(`${this.api}/${id}`,data)
}

deleteVendor(id:number){
return this.http.delete(`${this.api}/${id}`)
}

toggleVendor(id:number){
return this.http.patch(`${this.api}/${id}/toggle`,{})
}

}