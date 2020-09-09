import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit 
{
  /*
    products:Product[];

    constructor(private http:HttpClient)
    {
        console.log("Before ngoninit");
    }

    
    ngOnInit(): void 
    {
    //http://localhost:3005/api/products
    this.http.get<{[key:string]:Product}>("http://localhost:3005/api/product")
    .pipe(map(
        responseData=>
        {
            const postArray = [];
            for(const key in responseData)
            {
                if(responseData.hasOwnProperty(key))
                {
                    postArray.push({...responseData[key],id:key})
                }
                else
                    alert("Emptyy");

            }
            console.log(postArray);
            return postArray;

        })).subscribe(posts=>{
            //console.log(this.products);
            this.products=posts;
        });
    }
*/

    products: any;
    categories: any;

    //@ViewChild('ingre_qty') ingre_qty: ElementRef;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
       // let cid = this.router.snapshot.paramMap.get('id');   //get product id from URL

        this.http.get("http://localhost:3005/api/products" ).subscribe(posts => {
            console.log("array" + posts);
            ///product/category/:categoryId
            this.products = posts;
            console.log(this.products);
        });
    }
}
