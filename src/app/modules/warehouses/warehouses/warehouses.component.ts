import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
selector: 'app-warehouses',
standalone: true,
imports: [CommonModule, HttpClientModule],
templateUrl: './warehouses.component.html',
styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

warehouses:any[]=[]

constructor(private http:HttpClient){}

ngOnInit(){
this.load()
}

load(){
this.http.get<any[]>('https://localhost:7036/api/warehouses')
.subscribe(res=>{
this.warehouses=res
})
}

}