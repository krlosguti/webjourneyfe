/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainformComponent } from './mainform.component';

describe('MainformComponent', () => {
  let component: MainformComponent;
  let fixture: ComponentFixture<MainformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
