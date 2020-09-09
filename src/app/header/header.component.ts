import { Component, OnInit } from '@angular/core';
import { Category } from "../category.model";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Artist } from '../artist.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    categories:Category[];
    artists:Artist[];

    constructor(private http:HttpClient) { }

    ngOnInit(): void 
    {
       this.http.get<{[key:string]:Category}>("http://localhost:3005/api/categories").pipe(map(responseData=>
       {
            const postArray=[];
            for(const key in responseData)
            {
                if(responseData.hasOwnProperty(key))
                {
                    postArray.push({...responseData[key],id:key})
                }
            }
            return postArray;  
       })).subscribe(posts=>{ this.categories=posts; })   

        this.http.get<{ [key: string]:Artist }>("http://localhost:3005/api/artists").pipe(map(responseData => {
            const postArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postArray.push({ ...responseData[key], id: key })
                }
            }
            return postArray;
        })).subscribe(posts => { this.artists = posts; })   
    }

}
