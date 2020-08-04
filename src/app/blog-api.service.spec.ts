import { TestBed } from '@angular/core/testing';

import { BlogApi} from './blog-api.service';

describe('BlogApiService', () => {
  let service: BlogApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
