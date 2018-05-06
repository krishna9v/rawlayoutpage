import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidegridComponent } from './sidegrid.component';

describe('SidegridComponent', () => {
  let component: SidegridComponent;
  let fixture: ComponentFixture<SidegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
