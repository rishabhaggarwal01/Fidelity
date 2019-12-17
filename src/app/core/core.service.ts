import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {LogService} from '@app/core/log.service';
import {environment} from '@env/environment';
import {UserModel} from '@app/core/core.model';


@Injectable({providedIn: 'root'})
export class CoreService {
  private $userSubject = new BehaviorSubject<UserModel | null>(null);
  detailedElement: any;
  viewProduct = [];
  loggedInUser: string;
  $user = this.$userSubject.asObservable();
  $handsetObserver = this.breakpointObserver.observe('(max-width: 640px)')
    .pipe(
      map(next => next.matches),
      shareReplay(1)
    );

  constructor(
    private log: LogService,
    private breakpointObserver: BreakpointObserver,
  ) {
    log.construct(this.constructor.name);
  }

  set user(user: UserModel | null) {
    this.$userSubject.next(user);
  }

  get user() {
    return this.$userSubject.value;
  }
}
