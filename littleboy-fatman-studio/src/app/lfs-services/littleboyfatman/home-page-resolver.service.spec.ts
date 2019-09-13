import { TestBed } from '@angular/core/testing';

import { HomePageResolverService } from './home-page-resolver.service';

describe('HomePageResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePageResolverService = TestBed.get(HomePageResolverService);
    expect(service).toBeTruthy();
  });
});
