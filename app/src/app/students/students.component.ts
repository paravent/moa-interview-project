import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../service/students.service";
import { Student } from "../service/model/student";
@Component({
               selector:    'app-students',
               templateUrl: './students.component.html',
               standalone:  false,
           })
export class StudentsComponent implements OnInit {
    //empty array to hold students data
    // this is more for me than you guys, im used to vue ;)
    students: Student[] = [];

    constructor(private studentsService: StudentsService) {}

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe((
            students: Student[]) => {
                console.log(students);
                this.students = students;
        });
    }

}