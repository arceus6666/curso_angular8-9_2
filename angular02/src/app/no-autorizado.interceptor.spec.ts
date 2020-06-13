import { TestBed } from '@angular/core/testing';

import { NoAutorizadoInterceptor } from './no-autorizado.interceptor';

describe('NoAutorizadoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoAutorizadoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NoAutorizadoInterceptor = TestBed.inject(NoAutorizadoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
