import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";
import { environment }    from "../../environments/environment";
import { HttpClient }     from "@angular/common/http";
import { map }            from "rxjs/operators";
@Injectable({ providedIn: 'root' })
export class StudentsService {
    private url = environment.apiBaseUrl + '/students';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<{data: Student[]}>(this.url)
        .pipe(map(({data}) => data)
        );
    }

    search (query: string): Observable<Student[]> {
        return this.http.get<{data: Student[]}>(`${this.url}?q=${encodeURIComponent(query)}`)
        .pipe(map(({data}) => data));
    }

}
