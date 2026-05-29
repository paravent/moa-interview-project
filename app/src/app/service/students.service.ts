import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";
import { environment }    from "../../environments/environment";
import { HttpClient }     from "@angular/common/http";
@Injectable({ providedIn: 'root' })
export class StudentsService {
    private url = environment.apiBaseUrl + '/students';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.url);
    }

}
