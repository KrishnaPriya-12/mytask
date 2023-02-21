import { Injectable } from '@angular/core';
import { OrderDTO } from './order-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderOperationService {

  baseURL = 'http://localhost:6001';
  
  allOrderEndpoint = this.baseURL+'/order/orders';
  orderByCategoryEndpoint=this.baseURL+'/order/category'

  orderArr:OrderDTO[] = [];
  constructor(private http:HttpClient) {

    console.log("Inside Constructor "+this.orderByCategoryEndpoint);
   }
   getAllOrdersFromSpring():Observable<OrderDTO[]>
  {
    console.log("inside service : "+this.allOrderEndpoint);
      return this.http.get<OrderDTO[]>(`${this.allOrderEndpoint}`);
  }

  getOrderDetailsbyCategory(category:string):Observable<OrderDTO[]>{
    console.log("Inside Method 1 "+this.orderByCategoryEndpoint);
    this.orderByCategoryEndpoint=this.orderByCategoryEndpoint+'/'+category;
    console.log("After adding city 2 "+this.orderByCategoryEndpoint);

    return this.http.get<OrderDTO[]>(`${this.orderByCategoryEndpoint}`);
  }

  getOrderArr():OrderDTO[]
  {
    return this.orderArr;
  }
}
