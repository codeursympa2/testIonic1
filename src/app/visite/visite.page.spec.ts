import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitePage } from './visite.page';

describe('VisitePage', () => {
  let component: VisitePage;
  let fixture: ComponentFixture<VisitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
