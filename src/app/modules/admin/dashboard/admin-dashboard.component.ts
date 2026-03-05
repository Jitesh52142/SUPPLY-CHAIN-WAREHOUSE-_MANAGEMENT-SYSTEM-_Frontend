import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
selector:'app-admin-dashboard',
standalone:true,
imports:[CommonModule],
templateUrl:'./admin-dashboard.component.html',
styleUrls:['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{

dashboard:any={}

constructor(private analytics:AnalyticsService){}

ngOnInit(){

this.analytics.getDashboard()
.subscribe(res=>{
this.dashboard=res
})

}

}