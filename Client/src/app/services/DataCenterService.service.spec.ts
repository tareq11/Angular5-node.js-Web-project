import { TestBed, inject } from '@angular/core/testing';

import { DataCenterService } from './DataCenterService';
describe('SitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCenterService]
    });
  });

  it('should be created', inject([DataCenterService], (service: DataCenterService) => {
    expect(service).toBeTruthy();
  }));
});
