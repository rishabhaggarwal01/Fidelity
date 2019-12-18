import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@app/core/core.service';
import { LogService } from '@app/core/log.service';
import { Subscription } from 'rxjs';
import { SnackService } from '@app/custom/snack/snack.service';
import { ChefDashboardService } from './chef-dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.scss', '../../app.component.scss']
})
export class ChefDashboardComponent implements OnDestroy, OnInit {
  headElements = ['Items', 'Category', 'Quantity Available'];
  mockData: any;
  cuisine: string;
  constructor(
    private log: LogService,
    private core: CoreService,
    private chefDashboard: ChefDashboardService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    log.construct();
    this.route.data.subscribe((data: { chefDashboard: any }) => {
      this.mockData = data.chefDashboard;
    });
  }

  ngOnInit() {
    if (this.core.loggedInUser === 'chefindian')
      this.cuisine = 'Indian'
    else if (this.core.loggedInUser === 'chefitalian')
      this.cuisine = 'Italian'
    else if (this.core.loggedInUser === 'chefbakery')
      this.cuisine = 'Bakery'
  }

  ngOnDestroy(): void {
  }

}
