import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
selector:'app-item-dialog',
standalone:true,
imports:[
CommonModule,
ReactiveFormsModule,
MatInputModule,
MatButtonModule,
MatFormFieldModule
],
templateUrl:'./item-dialog.component.html'
})

export class ItemDialogComponent{

form!:FormGroup

constructor(
private fb:FormBuilder,
private dialog:MatDialogRef<ItemDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data:any
){

this.form=this.fb.group({
name:[''],
sku:[''],
unit:['']
})




if(data){
this.form.patchValue(data)
}

}

save(){
this.dialog.close(this.form.value)
}

}