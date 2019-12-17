import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LogService } from '@app/core/log.service';
import { ShareModule } from '@app/share/share.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardService } from './dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { DashboardResolverService } from './dashboard-resolver.service';

@NgModule({
  imports: [
    ShareModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService, DashboardResolverService]
})
export class DashboardModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
