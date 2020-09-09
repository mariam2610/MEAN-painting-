import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    id: number;
    products: any;
    categories: any;

    @ViewChild('ingre_qty') ingre_qty: ElementRef;

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
        this.route.paramMap.subscribe(params => {
            this.ngOnInit();
        });
    }

    ngOnInit(): void 
    {
        let art_id = this.route.snapshot.paramMap.get('id');   //get product id from URL

        this.http.get("http://localhost:3005/api/product/artist/" + art_id).subscribe(posts => {
            console.log("array" + posts);
            ///product/category/:categoryId
            this.products = posts;
            console.log(this.products);
        });
    }

}
