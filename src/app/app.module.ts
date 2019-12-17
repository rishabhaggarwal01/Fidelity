import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { LinkComponent } from '@app/custom/link/link.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { LogService } from '@app/core/log.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MatTooltipModule,
    HttpModule
  ],
  declarations: [AppComponent, LinkComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private log: LogService) {
    log.construct(this.constructor.name);
  }
}
