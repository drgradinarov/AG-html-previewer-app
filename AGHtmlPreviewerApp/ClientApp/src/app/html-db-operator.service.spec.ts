import { TestBed } from '@angular/core/testing';

import { HtmlDbOperatorService } from './html-db-operator.service';

describe('HtmlDbOperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlDbOperatorService = TestBed.get(HtmlDbOperatorService);
    expect(service).toBeTruthy();
  });
});
