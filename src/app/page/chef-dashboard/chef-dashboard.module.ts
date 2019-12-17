import { NgModule } from '@angular/core';
import { ChefDashboardRoutingModule } from './chef-dashboard-routing.module';
import { ChefDashboardComponent } from './chef-dashboard.component';
import { LogService } from '@app/core/log.service';
import { ShareModule } from '@app/share/share.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChefDashboardService } from './chef-dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ChefDashboardResolverService } from './chef-dashboard-resolver.service';

@NgModule({
  imports: [
    ShareModule,
    ChefDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [ChefDashboardComponent],
  providers: [ChefDashboardService, ChefDashboardResolverService]
})
export class ChefDashboardModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
