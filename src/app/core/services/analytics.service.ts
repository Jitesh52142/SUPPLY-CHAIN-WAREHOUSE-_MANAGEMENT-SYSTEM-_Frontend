import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private api = "https://localhost:7036/api/analytics";

  constructor(private http: HttpClient) {}

  getDashboard():Observable<any>{
    return this.http.get(`${this.api}/dashboard`);
  }

  getStockSummary():Observable<any>{
    return this.http.get(`${this.api}/stock-summary`);
  }

  getVendorPurchase():Observable<any>{
    return this.http.get(`${this.api}/vendor-purchase`);
  }

  getLowStock():Observable<any>{
    return this.http.get(`${this.api}/low-stock`);
  }

}