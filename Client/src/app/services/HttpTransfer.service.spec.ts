import { TestBed, inject } from '@angular/core/testing';

import { HttpTransfer } from './HttpTransfer.service';

describe('AService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTransfer]
    });
  });

  it('should be created', inject([HttpTransfer], (httpTransfer: HttpTransfer) => {
    expect(HttpTransfer).toBeTruthy();
  }));
});
