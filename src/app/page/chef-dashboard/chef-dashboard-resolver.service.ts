import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ChefDashboardService } from './chef-dashboard.service';
import { Observable, EMPTY } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { LogService } from '@app/core/log.service';
import { SnackService } from '@app/custom/snack/snack.service';

@Injectable()
export class ChefDashboardResolverService implements Resolve<any> {

    constructor(private chefDashboardService: ChefDashboardService, private router: Router, private route: ActivatedRoute, private log: LogService, private snack: SnackService, ) {
        log.construct();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.chefDashboardService.readData()
    }
}
