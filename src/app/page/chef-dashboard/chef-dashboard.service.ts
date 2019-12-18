import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from '@app/core/log.service';
import { CoreService } from '@app/core/core.service';

@Injectable()
export class ChefDashboardService implements OnDestroy {
  mockDataIndianFood = [
    { name: 'Wheat', category: 'Flour', qtyAvailable: 20 },
    { name: 'Rice', category: 'Flour', qtyAvailable: 10 },
    { name: 'Mustard', category: 'Fats', qtyAvailable: 5 },
    { name: 'Vegetable', category: 'Fats', qtyAvailable: 20 },
    { name: 'Onions', category: 'Vegetables', qtyAvailable: 15 },
    { name: 'Capsicum', category: 'Vegetables', qtyAvailable: 10 },
    { name: 'Salt', category: 'Add-Ons', qtyAvailable: 5 },
    { name: 'Sugar', category: 'Add-Ons', qtyAvailable: 10 }
  ]

  mockDataItalianFood = [
    { name: 'Wheat', category: 'Flour', qtyAvailable: 20 },
    { name: 'Rice', category: 'Flour', qtyAvailable: 10 },
    { name: 'Multigrain', category: 'Flour', qtyAvailable: 5 },
    { name: 'Butter', category: 'Fats', qtyAvailable: 20 },
    { name: 'Olive', category: 'Fats', qtyAvailable: 15 },
    { name: 'Capsicum', category: 'Vegetables', qtyAvailable: 10 },
    { name: 'Mushroom', category: 'Vegetables', qtyAvailable: 5 },
    { name: 'Baby Corns', category: 'Vegetables', qtyAvailable: 10 },
    { name: 'Onions', category: 'Add-Ons', qtyAvailable: 10 },
    { name: 'Salt', category: 'Add-Ons', qtyAvailable: 10 }
  ]

  mockDatabakeryFood = [
    { name: 'Butter', category: 'Fats', qtyAvailable: 20 },
    { name: 'Olive', category: 'Fats', qtyAvailable: 10 },
    { name: 'Olives', category: 'Add-Ons', qtyAvailable: 5 },
    { name: 'Sugar', category: 'Add-Ons', qtyAvailable: 20 },
    { name: 'Vanilla', category: 'Add-Ons', qtyAvailable: 15 }
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
