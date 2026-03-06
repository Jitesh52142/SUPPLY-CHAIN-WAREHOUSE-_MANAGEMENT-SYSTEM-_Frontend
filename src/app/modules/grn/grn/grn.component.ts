import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-grn',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GrnComponent implements OnInit {

  grns: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGrn();
  }

  loadGrn() {
    this.http.get<any[]>('https://localhost:7036/api/grn')
      .subscribe(res => {
        this.grns = res;
      });
  }

}