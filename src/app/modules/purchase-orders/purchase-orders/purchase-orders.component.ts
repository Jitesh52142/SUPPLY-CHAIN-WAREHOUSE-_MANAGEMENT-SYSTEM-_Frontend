import { Component,OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'

import { PurchaseOrderService } from '../../../core/services/purchase-order.service';
@Component({
selector:'app-purchase-orders',
standalone:true,
imports:[
CommonModule,
MatTableModule,
MatButtonModule
],
templateUrl:'./purchase-orders.component.html'
})
export class PurchaseOrdersComponent implements OnInit{

orders:any[]=[]

displayedColumns=[
'id',
'vendor',
'status',
'totalAmount',
'actions'
]

constructor(
private service:PurchaseOrderService,
private dialog:MatDialog
){}

ngOnInit(){
this.loadOrders()
}

loadOrders(){
this.service.getOrders()
.subscribe(res=>{
this.orders=res
})
}

delete(id:number){
this.service.deleteOrder(id)
.subscribe(()=>{
this.loadOrders()
})
}

}