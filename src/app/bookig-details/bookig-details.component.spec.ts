import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookigDetailsComponent } from './bookig-details.component';

describe('BookigDetailsComponent', () => {
  let component: BookigDetailsComponent;
  let fixture: ComponentFixture<BookigDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookigDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
