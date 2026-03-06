import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@Component({
selector:'app-analytics',
standalone:true,
imports:[CommonModule,NgChartsModule],
templateUrl:'./analytics.component.html',
styleUrls:['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit{

dashboard:any

stockChart:any={
labels:[],
datasets:[{
data:[],
label:'Stock Summary'
}]
}

constructor(private http:HttpClient){}

ngOnInit(){
this.loadDashboard()
this.loadStockSummary()
}

loadDashboard(){
this.http.get('https://localhost:7036/api/analytics/dashboard')
.subscribe(res=>{
this.dashboard=res
})
}

loadStockSummary(){
this.http.get<any[]>('https://localhost:7036/api/analytics/stock-summary')
.subscribe(res=>{

this.stockChart.labels=res.map(x=>x.itemName)
this.stockChart.datasets[0].data=res.map(x=>x.quantity)

})
}

}