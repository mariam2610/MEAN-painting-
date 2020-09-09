import { Category } from './category.model';
import {Artist} from './artist.model';

export class Product
{
    public _id?: string
    public product_name: string;
    public product_desc: string;
    public productImagePath: string;
    public product_price: number;
    public product_stock: number;
    public product_category: [Category];
    public product_artist: [Artist];
    public product_medium:string;
    public product_height:string;
    public product_surface:string;
    //public cat_id?:number;

    constructor(_id: string, product_name: string, product_desc: string, productImagePath: string, product_price: number, product_medium: string,product_height: string,product_surface: string) {

        this._id=_id;
        this.product_name = product_name;
        this.product_desc = product_desc;
        this.productImagePath = productImagePath;
        this.product_price = product_price;
        this.product_medium=product_medium;
        this.product_height = product_height;
        this.product_surface = product_surface;
    }
}

/*
"_id" : ObjectId("5efdf8a56f48db261c3cadbe"),
    "product_name" : "Nature Paintings",
    "product_desc" : "Blend of Nature and Art",
    "product_price" : 7200,
    "product_width" : 15,
    "product_category" : ObjectId("5eef490a849b0c26a4991772"),
    "product_stock" : 15,
    "product_sold" : 10,
    "product_medium" : "Acrylic color",
    "product_height" : 18,
    "product_artist" : ObjectId("5efde3f55f9e331e08d76c83"),
    "product_surface" : "Canvas",
    "productImagePath" : "uploads/nature2.jpeg",
    "createdAt" : ISODate("2020-07-02T15:09:25.281Z"),
    "updatedAt" : ISODate("2020-07-02T15:09:25.281Z"),
    "__v" : 0
*/