import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LogService } from '@app/core/log.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CoreService } from '@app/core/core.service';
import { OverlayContainer, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') theme;
  @ViewChild(MatSidenav, { static: false }) sideNav: MatSidenav;
  handset: boolean;
  constructor(
    private log: LogService,
    public router: Router,
    public core: CoreService,
    public overlay: OverlayContainer,
    private activated: ActivatedRoute
  ) {
    log.construct(this.constructor.name);
    this.toggleTheme();
    let ref: OverlayRef;
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        return ref;
      }
      return ref && ref.dispose();
    });
    this.core.$handsetObserver.subscribe(handset => this.handset = handset);
  }

  onLogout() {
    this.core.user = null;
    this.router.navigate(['login']);
  }

  toggleTheme() {
    this.overlay.getContainerElement().classList.remove(this.theme);
    this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
    this.overlay.getContainerElement().classList.add(this.theme);
  }
}
