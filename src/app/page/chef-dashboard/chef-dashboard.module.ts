import { NgModule } from '@angular/core';
import { ChefDashboardRoutingModule } from './chef-dashboard-routing.module';
import { ChefDashboardComponent } from './chef-dashboard.component';
import { LogService } from '@app/core/log.service';
import { ShareModule } from '@app/share/share.module';
import { LoadModule } from '@app/custom/load/load.module';
import { DialogModule } from '@app/custom/dialog/dialog.module';
import { ReadModule } from '@app/custom/read/read.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChefDashboardService } from './chef-dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ShareModule,
    ChefDashboardRoutingModule,
    LoadModule,
    DialogModule,
    ReadModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [ChefDashboardComponent],
  providers: [ChefDashboardService]
})
export class ChefDashboardModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
