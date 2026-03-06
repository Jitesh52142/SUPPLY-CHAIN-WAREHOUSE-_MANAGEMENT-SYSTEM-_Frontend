import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  private api = "https://localhost:7036/api/purchase-orders"

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get(this.api)
  }

  createOrder(data:any){
    return this.http.post(this.api,data)
  }

  addLine(poId:number,data:any){
    return this.http.post(`${this.api}/${poId}/lines`,data)
  }

  updateStatus(poId:number,status:any){
    return this.http.patch(`${this.api}/${poId}/status`,status)
  }

}