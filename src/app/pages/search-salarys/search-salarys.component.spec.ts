import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSalarysComponent } from './search-salarys.component';

describe('SearchSalarysComponent', () => {
  let component: SearchSalarysComponent;
  let fixture: ComponentFixture<SearchSalarysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSalarysComponent]
    });
    fixture = TestBed.createComponent(SearchSalarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
