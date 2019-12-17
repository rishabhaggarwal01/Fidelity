import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LogService } from '@app/core/log.service';
import { CoreService } from '@app/core/core.service';
import { handle, scrub } from '@app/share/share.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(
    private log: LogService,
    private http: HttpClient,
    private core: CoreService
  ) {
    log.construct(this.constructor.name);
  }
}
