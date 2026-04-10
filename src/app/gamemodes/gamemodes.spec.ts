import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemodes } from './gamemodes';

describe('Gamemodes', () => {
  let component: Gamemodes;
  let fixture: ComponentFixture<Gamemodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamemodes],
    }).compileComponents();

    fixture = TestBed.createComponent(Gamemodes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
