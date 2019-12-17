import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from '@app/core/log.service';
import { CoreService } from '@app/core/core.service';

@Injectable()
export class ChefDashboardService implements OnDestroy {
  mockDataIndianFood = [
    { name: 'Wheat', qtyAvailable: 20 },
    { name: 'Rice', qtyAvailable: 10 },
    { name: 'Mustard', qtyAvailable: 5 },
    { name: 'Vegetable', qtyAvailable: 20 },
    { name: 'Onions', qtyAvailable: 15 },
    { name: 'Capsicum', qtyAvailable: 10 },
    { name: 'Salt', qtyAvailable: 5 },
    { name: 'Sugar', qtyAvailable: 10 }
  ]

  mockDataItalianFood = [
    { name: 'Wheat', qtyAvailable: 20 },
    { name: 'Rice', qtyAvailable: 10 },
    { name: 'Multigrain', qtyAvailable: 5 },
    { name: 'Butter', qtyAvailable: 20 },
    { name: 'Olive', qtyAvailable: 15 },
    { name: 'Capsicum', qtyAvailable: 10 },
    { name: 'Mushroom', qtyAvailable: 5 },
    { name: 'Baby Corns', qtyAvailable: 10 },
    { name: 'Onions', qtyAvailable: 10 },
    { name: 'Salt', qtyAvailable: 10 }
  ]

  mockDatabakeryFood = [
    { name: 'Butter', qtyAvailable: 20 },
    { name: 'Olive', qtyAvailable: 10 },
    { name: 'Olives', qtyAvailable: 5 },
    { name: 'Sugar', qtyAvailable: 20 },
    { name: 'Vanilla', qtyAvailable: 15 }
  ]
  constructor(
    private log: LogService,
    private core: CoreService
  ) {
    log.construct();

  }

  readData() {
    if (this.core.loggedInUser === 'chefindian')
      return this.mockDataIndianFood;
    else if (this.core.loggedInUser === 'chefitalian')
      return this.mockDataItalianFood;
    else if (this.core.loggedInUser === 'chefbakery')
      return this.mockDatabakeryFood;
  }

  ngOnDestroy(): void {

  }
}
