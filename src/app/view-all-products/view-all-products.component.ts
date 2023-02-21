import { Component } from '@angular/core';
import { ProductDTO } from '../product-dto';
import { ProductOperationService } from '../product-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  __productService:ProductOperationService; // creating object of Service layer
  router:Router;

  
  allProducts : Array<ProductDTO> = [];
  watchList : Array<ProductDTO> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(productService:ProductOperationService,router:Router)
  {
    this.__productService = productService;
    this.allProducts = this.__productService.getProductArr();
    this.router = router;
    console.log(this.allProducts.length);
  }

  viewProductDetails(pid:string)
  {
    
    this.router.navigate(['productDetail',pid]);
  }

  placeOrder(pid:string)
  {
    this.router.navigate(['order',pid]);
    
  }

  addWatchlist(product:string)
  {
    let addProductId = parseInt(product);
    
    this.allProducts.forEach(p=>{
      if(p.productId == addProductId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

}
