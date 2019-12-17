import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LogService } from '@app/core/log.service';
import { DashboardResolverService } from './dashboard-resolver.service';

const routes: Routes = [{ path: '', component: DashboardComponent, resolve: {dashboard: DashboardResolverService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
