import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from '@app/core/log.service';

@Injectable()
export class DashboardService implements OnDestroy {

  mockData = [
    { name: 'Wheat', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Rice', qtyReqd: 10, v1qty: 5, v2qty: 0, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Multigrain', qtyReqd: 20, v1qty: 10, v2qty: 5, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Butter', qtyReqd: 5, v1qty: 0, v2qty: 0, bakery: 'Y', Italian: 'Y', Indian: 'N' },
    { name: 'Olive', qtyReqd: 10, v1qty: 5, v2qty: 0, bakery: 'Y', Italian: 'Y', Indian: 'N' },
    { name: 'Mustard', qtyReqd: 30, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'N', Indian: 'Y' },
    { name: 'Vegetable', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'N', Indian: 'Y' },
    { name: 'Mushroom', qtyReqd: 20, v1qty: 5, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Baby Corns', qtyReqd: 5, v1qty: 0, v2qty: 5, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Onions', qtyReqd: 10, v1qty: 10, v2qty: 0, bakery: 'N', Italian: 'Y', Indian: 'Y' },
    { name: 'Capsicum', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'N', Italian: 'Y', Indian: 'N' },
    { name: 'Salt', qtyReqd: 8, v1qty: 2, v2qty: 3, bakery: 'Y', Italian: 'Y', Indian: 'Y' },
    { name: 'Olives', qtyReqd: 10, v1qty: 5, v2qty: 5, bakery: 'Y', Italian: 'N', Indian: 'N' },
    { name: 'Sugar', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'Y', Italian: 'N', Indian: 'Y' },
    { name: 'Vanilla', qtyReqd: 20, v1qty: 10, v2qty: 10, bakery: 'Y', Italian: 'N', Indian: 'N' }

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
