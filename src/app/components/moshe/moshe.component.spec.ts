import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosheComponent } from './moshe.component';

describe('MosheComponent', () => {
  let component: MosheComponent;
  let fixture: ComponentFixture<MosheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
