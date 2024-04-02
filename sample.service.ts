import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { University } from './model/sample.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SampleService {
    constructor(private http: HttpClient){}
    
    getUniversities(){
        return this.http.get<University[]>('http://universities.hipolabs.com/serach?country=United+States');
    }
    
}