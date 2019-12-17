import {inject, TestBed} from '@angular/core/testing';

import {ChefDashboardResolverService} from './chef-dashboard-resolver.service';

describe('ChefDashboardResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChefDashboardResolverService]
    });
  });

  it('should be created', inject([ChefDashboardResolverService], (service: ChefDashboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
