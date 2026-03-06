import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {

  orders:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(){
    this.http.get<any[]>('https://localhost:7036/api/purchase-orders')
      .subscribe((res:any[])=>{

        this.orders = res.map((o:any)=>({
          id: o.id,
          vendor: o.vendorName || o.vendorId,
          status: o.status,
          total: o.totalAmount || 0
        }))

      })
  }

}