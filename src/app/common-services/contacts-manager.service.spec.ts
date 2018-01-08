import { TestBed, inject } from '@angular/core/testing';

import { ContactsManagerService } from './contacts-manager.service';

describe('ContactsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsManagerService]
    });
  });

  it('should be created', inject([ContactsManagerService], (service: ContactsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
