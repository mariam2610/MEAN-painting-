import { Component, OnInit } from '@angular/core';
import { Category } from "../category.model";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    categories:Category[];
    constructor(private http: HttpClient) { }

    ngOnInit(): void 
    {
       this.http.get<{ [key: string]: Category }>("http://localhost:3005/api/categories").pipe(map(responseData => {
           const postArray = [];
           for (const key in responseData) 
           {
               if (responseData.hasOwnProperty(key)) 
               {
                   postArray.push({ ...responseData[key], id: key })
               }
           }
           return postArray;
       })).subscribe(posts => { this.categories = posts; })   
    

    }
}
