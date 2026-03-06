import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  role = localStorage.getItem('role') || 'admin'

  menu:any[] = []

  ngOnInit(){

    if(this.role === 'admin'){
      this.menu = [
        {name:'Dashboard',route:'/admin/dashboard'},
        {name:'Inventory',route:'/admin/inventory'},
        {name:'Vendors',route:'/admin/vendors'},
        {name:'Warehouses',route:'/admin/warehouses'},
        {name:'Purchase Orders',route:'/admin/purchase-orders'},
        {name:'GRN',route:'/admin/grn'},
        {name:'Approvals',route:'/admin/approvals'},
        {name:'Analytics',route:'/admin/analytics'}
      ]
    }

    if(this.role === 'hod'){
      this.menu = [
        {name:'Dashboard',route:'/hod/dashboard'},
        {name:'Approvals',route:'/admin/approvals'},
        {name:'Purchase Orders',route:'/admin/purchase-orders'}
      ]
    }

    if(this.role === 'finance'){
      this.menu = [
        {name:'Dashboard',route:'/finance/dashboard'},
        {name:'Approvals',route:'/admin/approvals'}
      ]
    }

    if(this.role === 'director'){
      this.menu = [
        {name:'Dashboard',route:'/director/dashboard'},
        {name:'Approvals',route:'/admin/approvals'},
        {name:'Analytics',route:'/admin/analytics'}
      ]
    }

    if(this.role === 'warehouse'){
      this.menu = [
        {name:'Dashboard',route:'/warehouse/dashboard'},
        {name:'Inventory',route:'/admin/inventory'},
        {name:'GRN',route:'/admin/grn'}
      ]
    }

  }

}