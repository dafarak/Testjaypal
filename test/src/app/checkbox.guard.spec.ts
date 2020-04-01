import { TestBed, async, inject } from '@angular/core/testing';

import { CheckboxGuard } from './checkbox.guard';

describe('CheckboxGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckboxGuard]
    });
  });

  it('should ...', inject([CheckboxGuard], (guard: CheckboxGuard) => {
    expect(guard).toBeTruthy();
  }));
});
