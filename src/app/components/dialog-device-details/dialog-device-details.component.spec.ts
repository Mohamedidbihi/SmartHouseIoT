import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeviceDetailsComponent } from './dialog-device-details.component';

describe('DialogDeviceDetailsComponent', () => {
  let component: DialogDeviceDetailsComponent;
  let fixture: ComponentFixture<DialogDeviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeviceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
