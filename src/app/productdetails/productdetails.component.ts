import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartServices } from '../cart.service';
import { Cart } from '../cart.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
    id: number;
    products: any;
    
    @ViewChild('ingre_qty') ingre_qty: ElementRef;      //quantity value is stored here; elementref additional method to access value from select tag
    
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private cartServi: CartServices) { }

    ngOnInit(): void 
    {
        let id2 = this.route.snapshot.paramMap.get('id');   //get product id from URL

        this.http.get("http://localhost:3005/api/product/" + id2).subscribe(posts => {
            
            console.log("array" + posts);

            this.products = posts;
            console.log(this.products);
            
        });

        

    }

    addTocart() 
    {
        if(this.ingre_qty.nativeElement.value < 1)
        {
            alert("Choose Quantity for Buying !!!")
        }

        else
        {
            console.log(this.products._id);
            cart: Cart;
            const qty = this.ingre_qty.nativeElement.value;

            let id = this.products._id;
            let product_name = this.products.product_name;
            let product_count = qty;
            let product_image = this.products.productImagePath;
            let product_price = this.products.product_price;
            let product_total = qty * product_price;
            let product_sold = this.products.product_sold;
            let product_stock = this.products.product_stock;


            console.log(this.products.product_name);
            console.log(qty);
            const cartItems = new Cart(this.products._id, product_name, product_count, product_image, product_price, product_total,product_sold,product_stock);

            console.log("cartiems",cartItems);
            this.cartServi.addCart(cartItems);
            this.router.navigateByUrl('/cartdetails');
        }
    }

}
