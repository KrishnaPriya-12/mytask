import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  router:Router;
  
  allOrders : Array<OrderDTO> = [];
  constructor(orderService:OrderOperationService,router:Router)
  {
    //this.__orderService = orderService;
    //this.allOrders = this.__orderService.getOrderArr();
    this.router = router;
    //console.log(this.allOrders.length);
  }

  viewOrderDetails()
  {
    
    this.router.navigate(['orderList']);
  }

}
