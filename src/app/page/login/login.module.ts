import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogService } from '@app/core/log.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ShareModule } from '@app/share/share.module';
import { ButtonsModule } from '@app/custom/buttons/buttons.module';
import { LoginService } from '@app/page/login/login.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    ButtonsModule,
    MatAutocompleteModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
