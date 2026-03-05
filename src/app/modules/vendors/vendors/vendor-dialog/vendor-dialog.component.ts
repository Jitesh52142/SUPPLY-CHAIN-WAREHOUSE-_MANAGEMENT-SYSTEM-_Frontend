import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
selector: 'app-vendor-dialog',
standalone: true,
imports: [
CommonModule,
ReactiveFormsModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule
],
templateUrl: './vendor-dialog.component.html'
})
export class VendorDialogComponent {

form

constructor(
private fb: FormBuilder,
private dialogRef: MatDialogRef<VendorDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any
) {

this.form = this.fb.group({
name: [data?.name || '', Validators.required],
email: [data?.email || '', Validators.required],
phone: [data?.phone || ''],
address: [data?.address || ''],
gstNumber: [data?.gstNumber || '', Validators.required]
})

}

save() {

if(this.form.invalid){
return
}

this.dialogRef.close(this.form.value)

}

close(){
this.dialogRef.close()
}

}