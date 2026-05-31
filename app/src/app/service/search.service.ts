import { Injectable }     from '@angular/core';
import { map, Observable, of } from "rxjs";
import { environment }    from "../../environments/environment";
import { HttpClient, HttpParams }     from "@angular/common/http";
import { Student } from './model/student';
@Injectable({ providedIn: 'root' })
    

export class SearchService {
    private url = environment.apiBaseUrl + '/students';
    private baseUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

    search(query: string): Observable<Student[]> {
        return this.http
            .get<{ data: Student[] }>(`${this.url}?q=${encodeURIComponent(query)}`)
            .pipe(
                map(response => response.data)
            );
    }
    //generic
    search2<T>(endpoint: string , params: Record<string, string>): Observable<T> {

        let httpParams = new HttpParams();
        Object.entries(params).forEach(([key, value]) => {httpParams = httpParams.set(key, value);});

        return this.http
            .get<{ data: T }>(`${this.baseUrl}/${endpoint}`, { params: httpParams })
            .pipe(map(res => res.data));
    }
}