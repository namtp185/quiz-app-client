import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormioComponent } from './test-formio.component';

describe('TestFormioComponent', () => {
  let component: TestFormioComponent;
  let fixture: ComponentFixture<TestFormioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
