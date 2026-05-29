import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../service/students.service";
import { Student } from "../service/model/student";
@Component({
               selector:    'app-students',
               templateUrl: './students.component.html',
               standalone:  false,
           })
export class StudentsComponent implements OnInit {

    constructor(private studentsService: StudentsService) {}

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe((students: Student[]) => {
            console.log(students);
        });
    }

}