import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [

{
path:'',
redirectTo:'login',
pathMatch:'full'
},

{
path:'login',
loadComponent:()=>import('./modules/auth/login/login.component')
.then(m=>m.LoginComponent)
},

{
path:'register',
loadComponent:()=>import('./modules/auth/register/register.component')
.then(m=>m.RegisterComponent)
},

{
path:'admin',
component:DashboardLayoutComponent,
children:[
{
path:'dashboard',
loadComponent:()=>import('./modules/admin/dashboard/admin-dashboard.component')
.then(m=>m.AdminDashboardComponent)
},
{
path:'inventory',
loadComponent:()=>import('./modules/inventory/inventory/inventory.component')
.then(m=>m.InventoryComponent)
},
{
path:'vendors',
loadComponent:()=>import('./modules/vendors/vendors/vendors.component')
.then(m=>m.VendorsComponent)
}
]
}

];