import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductDTO } from '../product-dto';
import { ProductOperationService } from '../product-operation.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  __productService:ProductOperationService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  p:ProductDTO = new ProductDTO(0,'',0,'','','','',0,0,0);
    constructor(productService:ProductOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__productService = productService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchProductId= this.activeRoute.snapshot.params['pid']; // extract value from prameter(URI)
    console.log(searchProductId);
    this.p = this.__productService.getProductByNumber(parseInt(searchProductId)); // get data from service class
    console.log(this.p);
  }

  goForBuy(product:string)
  {
    let productId = parseInt(product);
    console.log(" code to buy "+productId+" product");
    
  }

  

}
