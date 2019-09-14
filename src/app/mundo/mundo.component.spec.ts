import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoComponent } from './mundo.component';

describe('MundoComponent', () => {
  let component: MundoComponent;
  let fixture: ComponentFixture<MundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
