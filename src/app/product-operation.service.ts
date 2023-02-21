import { Injectable } from '@angular/core';
import { ProductDTO } from './product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductOperationService {

  constructor() { }

  productArr:ProductDTO[] = [];

  addProduct(productFromAdmin:ProductDTO)
  {
    
    this.productArr.push(productFromAdmin); 
    console.log("Inside Product Service : Product Added "+productFromAdmin.productId);
    console.log(" Total Products Are :- "+this.productArr.length);
    
  }
  getProductArr():ProductDTO[]
  {
    return this.productArr;
  }
  getProductByNumber(searchProductId:number):ProductDTO
  {
    let outputProduct:ProductDTO = new ProductDTO(0,'',0,'','','','',0,0,0);
    for(let i=0;i<this.productArr.length;i++)
    {
      let thisProduct:ProductDTO = this.productArr[i];
        if(thisProduct.productId == searchProductId)
        {
          outputProduct = thisProduct;
          break;
        }
    }
    
    return outputProduct;
  }
}
