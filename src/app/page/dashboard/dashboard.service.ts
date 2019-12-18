import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from '@app/core/log.service';

@Injectable()
export class DashboardService implements OnDestroy {

  mockData = [
    { name: 'Wheat', category: 'Flour', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Rice', category: 'Flour', qtyReqd: 10, v1qty: 5, v2qty: 0, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Multigrain', category: 'Flour', qtyReqd: 20, v1qty: 10, v2qty: 5, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Butter', category: 'Fats', qtyReqd: 5, v1qty: 0, v2qty: 0, bakery: 'Y', Italian: 'Y', Indian: 'N' },
    { name: 'Olive', category: 'Fats', qtyReqd: 10, v1qty: 5, v2qty: 0, bakery: 'Y', Italian: 'Y', Indian: 'N' },
    { name: 'Mustard', category: 'Fats', qtyReqd: 30, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'N', Indian: 'Y' },
    { name: 'Vegetable', category: 'Fats', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'N', Indian: 'Y' },
    { name: 'Mushroom', category: 'Vegetables', qtyReqd: 20, v1qty: 5, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Baby Corns', category: 'Vegetables', qtyReqd: 5, v1qty: 0, v2qty: 5, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Onions', category: 'Vegetables', qtyReqd: 10, v1qty: 10, v2qty: 0, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Capsicum', category: 'Vegetables', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Salt', category: 'Add-Ons', qtyReqd: 8, v1qty: 2, v2qty: 3, bakery: 'Y', Italian: 'Y', Indian: 'Y' },
    { name: 'Olives', category: 'Add-Ons', qtyReqd: 10, v1qty: 5, v2qty: 5, bakery: 'Y', Italian: 'N', Indian: 'N' },
    { name: 'Sugar', category: 'Add-Ons', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'Y', Italian: 'N', Indian: 'Y' },
    { name: 'Vanilla', category: 'Add-Ons', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'Y', Italian: 'N', Indian: 'N' }

  ]

  constructor(
    private log: LogService
  ) {
    log.construct();

  }

  readData() {
    return this.mockData;
  }

  ngOnDestroy(): void {

  }
}
