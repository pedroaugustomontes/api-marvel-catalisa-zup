import { TestBed } from '@angular/core/testing';

import { CharactersApiService } from './characters-api.service';

describe('CharactersApiService', () => {
  let service: CharactersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
