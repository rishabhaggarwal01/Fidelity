import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {LogService} from '@app/core/log.service';

const routes: Routes = [{path: '', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
