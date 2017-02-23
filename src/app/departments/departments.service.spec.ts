import { TestBed, inject } from '@angular/core/testing';
import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentsService]
    });
  });

  it('should ...', inject([DepartmentsService], (service: DepartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
