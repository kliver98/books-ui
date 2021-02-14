//Thanks to https://stackoverflow.com/questions/47236963/no-provider-for-httpclient
// Http testing module
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    console.log(service)
    expect(service).toBeTruthy();
  });
});
