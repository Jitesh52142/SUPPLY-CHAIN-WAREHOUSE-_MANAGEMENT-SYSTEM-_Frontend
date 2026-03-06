import { Component,OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { ApprovalService } from "../../../core/services/approval.service"

@Component({
selector:'app-approvals',
standalone:true,
imports:[
CommonModule,
MatTableModule,
MatButtonModule
],
templateUrl:'./approvals.component.html'
})
export class ApprovalsComponent implements OnInit{

approvals:any[]=[]

displayedColumns=[
'id',
'module',
'referenceId',
'status',
'actions'
]

constructor(private service:ApprovalService){}

ngOnInit(){
this.load()
}

load(){
this.service.getPending()
.subscribe((res:any)=>{
this.approvals=res
})
}

approve(a:any){

const payload={
approvalId:a.id,
action:"APPROVE",
userRole:"Director",
userName:"Admin"
}

this.service.approve(payload)
.subscribe(()=>{
this.load()
})

}

reject(a:any){

const payload={
approvalId:a.id,
action:"REJECT",
userRole:"Director",
userName:"Admin"
}

this.service.approve(payload)
.subscribe(()=>{
this.load()
})

}

}