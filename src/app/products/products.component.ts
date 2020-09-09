import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormArray,FormBuilder, FormGroup, FormControl, Validators, NgForm,ReactiveFormsModule } from "@angular/forms";
//import { ApiService } from '../apis/commonapis';
//import { FormsModule,FormGroup,FormBuilder,NgForm,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit 
{

    product:Product;
   
    postForm: FormGroup;
    constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

    PostData(form: NgForm) 
    {
        if (this.postForm.get('productImagePath').invalid) 
        {
            //this.isPhotoError = true;
            alert("ERROR")
        }
        //do something
    }

    ngOnInit(): void 
    {  
     this.newForm();   
    }

    newForm = function () 
    {
        this.postForm = this.fb.group({
            product_name : ['', Validators.compose([Validators.required])],
            product_desc: ['', Validators.compose([Validators.required])],
            product_price: ['', Validators.compose([Validators.required])],
            product_category: ['', Validators.compose([Validators.required])],
            product_artist: ['', Validators.compose([Validators.required])],
            product_height: ['', Validators.compose([Validators.required])],
            product_width: ['', Validators.compose([Validators.required])],
            product_surface: ['', Validators.compose([Validators.required])],
            product_medium: ['', Validators.compose([Validators.required])],
            
            productImagePath: ['', Validators.compose([Validators.required])]
        })
    }

    onCreatePost(postData: { product_name: string; product_desc: string; product_price: number; product_category: string; product_artist: number; product_surface: string; product_medium:string; product_height:number; product_width:number;}) 
    {
        console.log("Product data",postData);
        const formData = new FormData();
        //formData.append('file', this.fileData);
        this.http.post("http://localhost:3005/api/product/create", postData).subscribe(responseData => {
            console.log(responseData);
            console.log(Error);
            alert("Hurray! Product Created");
            this.router.navigate(['/homepage']);
        });
    }

    onFileSelect(event) 
    { // here is some error
        if (event.target.files.length > 0) 
        {
            const file = event.target.files[0];
            this.postForm.get('productImagePath').setValue(file);
        }

        /*onFileSelect(event: Event) 
        {
            const file = (event.target as HTMLInputElement).files[0];
            this.userForm.patchValue({ photo: file });
            this.userForm.get('photo').updateValueAndValidity();
        }         */


    }

}
