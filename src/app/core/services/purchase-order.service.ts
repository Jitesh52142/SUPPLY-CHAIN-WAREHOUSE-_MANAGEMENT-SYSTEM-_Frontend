import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  private api = 'https://localhost:7036/api/purchase-orders'

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get<any>(this.api)
  }

  createOrder(data: any) {
    return this.http.post(this.api, data)
  }

  updateOrder(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data)
  }

  deleteOrder(id: number) {
    return this.http.delete(`${this.api}/${id}`)
  }

}