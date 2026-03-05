import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
providedIn:'root'
})
export class InventoryService{

private api="https://localhost:7036/api/inventory/items"

constructor(private http:HttpClient){}

getItems():Observable<any>{
return this.http.get(this.api)
}

createItem(data:any){
return this.http.post(this.api,data)
}

updateItem(id:number,data:any){
return this.http.put(`${this.api}/${id}`,data)
}

deleteItem(id:number){
return this.http.delete(`${this.api}/${id}`)
}

}