import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAndPaymentComponent } from './delivery-and-payment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeliveryAndPaymentComponent', () => {
  let component: DeliveryAndPaymentComponent;
  let fixture: ComponentFixture<DeliveryAndPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAndPaymentComponent ],
      imports:[
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
