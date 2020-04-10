import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlamatComponent } from './edit-alamat.component';

describe('EditAlamatComponent', () => {
  let component: EditAlamatComponent;
  let fixture: ComponentFixture<EditAlamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
