import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@app/core/auth-guard.service';
import { LogService } from '@app/core/log.service';

const routes: Routes = [

  { path: 'dashboard', loadChildren: () => import('@app/page/dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [AuthGuardService] },
  { path: 'chefdashboard', loadChildren: () => import('@app/page/chef-dashboard/chef-dashboard.module').then(m => m.ChefDashboardModule), canLoad: [AuthGuardService] },
  { path: 'login', loadChildren: () => import('@app/page/login/login.module').then(m => m.LoginModule) },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
