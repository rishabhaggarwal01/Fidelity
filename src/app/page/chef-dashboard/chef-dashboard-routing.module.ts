import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefDashboardComponent } from './chef-dashboard.component';
import { LogService } from '@app/core/log.service';
import { ChefDashboardResolverService } from './chef-dashboard-resolver.service';

const routes: Routes = [{ path: '', component: ChefDashboardComponent, resolve: {chefDashboard: ChefDashboardResolverService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefDashboardRoutingModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
