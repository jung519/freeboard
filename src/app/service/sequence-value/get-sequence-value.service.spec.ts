import { TestBed, inject } from '@angular/core/testing';

import { GetSequenceValueService } from './get-sequence-value.service';

describe('GetSequenceValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSequenceValueService]
    });
  });

  it('should be created', inject([GetSequenceValueService], (service: GetSequenceValueService) => {
    expect(service).toBeTruthy();
  }));
});
