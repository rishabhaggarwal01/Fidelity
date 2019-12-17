import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@app/core/core.service';
import { LogService } from '@app/core/log.service';
import { DashboardService } from './dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../app.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {
  headElements = ['Items', 'Required Qty', 'Vendor1', 'Vendor2', 'Received Qty', 'Status', 'Bakery', 'Italian', 'Indian'];
  mockData;
  constructor(
    private log: LogService,
    private core: CoreService,
    private dashboard: DashboardService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    log.construct();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { dashboard: any }) => {
      this.mockData = data.dashboard;
    });
  }
  
  ngOnDestroy(): void {
  }

}
