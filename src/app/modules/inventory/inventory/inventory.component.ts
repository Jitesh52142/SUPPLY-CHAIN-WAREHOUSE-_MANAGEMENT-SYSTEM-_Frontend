import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MatDialog } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { InventoryService } from '../../../core/services/inventory.service'
import { ItemDialogComponent } from '../item-dialog/item-dialog.component'

@Component({
selector:'app-inventory',
standalone:true,
imports:[
CommonModule,
MatTableModule,
MatButtonModule,
MatDialogModule,
MatFormFieldModule,
MatInputModule
],
templateUrl:'./inventory.component.html',
styleUrls:['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{

items:any[]=[]

displayedColumns=[
'id',
'name',
'sku',
'unit',
'actions'
]

constructor(
private inventory:InventoryService,
private dialog:MatDialog
){}

ngOnInit(){
this.loadItems()
}

loadItems(){
this.inventory.getItems()
.subscribe(res=>{
this.items=res
})
}

delete(id:number){
this.inventory.deleteItem(id)
.subscribe(()=>{
this.loadItems()
})
}

add(){

const dialogRef=this.dialog.open(ItemDialogComponent)

dialogRef.afterClosed()
.subscribe(result=>{
if(result){
this.inventory.createItem(result)
.subscribe(()=>this.loadItems())
}
})

}

edit(item:any){

const dialogRef=this.dialog.open(ItemDialogComponent,{
data:item
})

dialogRef.afterClosed()
.subscribe(result=>{
if(result){
this.inventory.updateItem(item.id,result)
.subscribe(()=>this.loadItems())
}
})

}

}