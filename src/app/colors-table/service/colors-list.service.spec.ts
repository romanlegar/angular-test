import { TestBed, inject } from '@angular/core/testing';

import { ColorsListService } from './colors-list.service';

describe('ColorsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorsListService]
    });
  }); 

  it('should be created', inject([ColorsListService], (service: ColorsListService) => {
    expect(service).toBeTruthy();
  }));
});
