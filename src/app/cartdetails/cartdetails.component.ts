import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import { NewOrderServices } from '../neworder.service';
import { User } from '../user.model';
import { UserServices } from '../user.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

    constructor(private cartService: CartServices, private http: HttpClient, private newOrder: NewOrderServices, private userService: UserServices) { }

    cart: Cart[];
    order: Order[];
    loguser: User;
    products:Product[];
    //user
    //myuser:UserServices;
    final_total: number = 0;

    ngOnInit(): void 
    {
        this.cart = this.cartService.getcart(); //product_id, product_name, product_count, product_image, product_price, product_total
        this.loguser = this.userService.getuser()

        for (let i of this.cart) {
            let idd = i.product_id;
            let price = i.product_price;
            let qty = i.product_count;
            this.final_total = this.final_total + (price * qty);
            //alert(i.product_total);  //results in price*qty of each product
        }
    }

    deleteCart(index: number) {
        //let d=index;
        this.final_total = 0;
        this.cartService.deleteCart(index);

        this.cart = this.cartService.getcart();
        //let d= this.cart.indexOf;
        //console.log(d.toString);

        for (let i of this.cart) {
            //let idd = i.product_id;
            let price = i.product_price;
            let qty = i.product_count;
            this.final_total = this.final_total + (price * qty);
            let sold=i.product_sold-1;
            //alert(sold);  //results in price*qty of each product
        }


    }


    placeOrder() 
    {

        for (let i of this.cart) 
        {
            const items = new Order(i.product_id, i.product_name, i.product_count, i.product_price);
            this.newOrder.addToOrder(items);
        }

        let products2: Order[];       //blank array of type Order
        //let loguser:User;
        products2 = this.newOrder.getOrder();
        let amount = this.final_total;
        let address = "Kondhwa";         
        let user = "5ef70c49d0d1b7718c1008ab";           //M.G. Road Camp
        //5ef0cdd0eaa18f53b0f36ebc()5ef0cdd0eaa18f53b0f36ebc
        
        console.log("Products in cart",this.cart)
        console.log("Products in hetorder",this.newOrder.getOrder());

        // products.product_stock=this.products.product_stock;
        let postData =
        {
            products: products2,
            amount: amount,
            address: address,
            user: user 
        }
        //console.log(products2);  
        console.log("postdata",postData);
        if (this.cart.length != 0) 
        {
            this.http.post('http://localhost:3005/api/order/create', postData)
                .subscribe(responseData => {
                    //console.log(responseData);
                    alert("Order is created !!!!");
                });
        }
        else {
            alert("Please Add Items in Cart");
        }
    }   
}   
