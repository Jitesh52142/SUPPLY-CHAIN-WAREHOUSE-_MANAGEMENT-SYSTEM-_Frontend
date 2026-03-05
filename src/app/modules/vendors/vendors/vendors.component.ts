import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MatDialog } from '@angular/material/dialog'

import { VendorService } from '../../../core/services/vendor.service'
import { VendorDialogComponent } from './vendor-dialog/vendor-dialog.component'

@Component({
selector:'app-vendors',
standalone:true,
imports:[
CommonModule,
MatTableModule,
MatButtonModule,
MatDialogModule
],
templateUrl:'./vendors.component.html',
styles:[``]
})

export class VendorsComponent implements OnInit{

vendors:any[]=[]

displayedColumns=[
'id',
'name',
'email',
'status',
'actions'
]

constructor(
private vendorService:VendorService,
private dialog:MatDialog
){}

ngOnInit(){
this.loadVendors()
}

loadVendors(){
this.vendorService.getVendors()
.subscribe((res:any)=>{
this.vendors=res
})
}

delete(id:number){
this.vendorService.deleteVendor(id)
.subscribe(()=>{
this.loadVendors()
})
}

toggle(id:number){
this.vendorService.toggleVendor(id)
.subscribe(()=>{
this.loadVendors()
})
}

add(){

const dialogRef=this.dialog.open(VendorDialogComponent)

dialogRef.afterClosed()
.subscribe((result:any)=>{

if(result){

this.vendorService.createVendor(result)
.subscribe(()=>{
this.loadVendors()
})

}

})



}

edit(vendor:any){

const dialogRef=this.dialog.open(
VendorDialogComponent,
{ data:vendor }
)

dialogRef.afterClosed()
.subscribe((result:any)=>{

if(result){
this.vendorService.updateVendor(vendor.id,result)
.subscribe(()=>{
this.loadVendors()
})
}

})

}

}