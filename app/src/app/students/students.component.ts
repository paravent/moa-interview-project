import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../service/students.service";
import { Student } from "../service/model/student";
import { gradeToColor, Grades } from '../enums/grades';
import { SearchService } from "../service/search.service";
@Component({
               selector:    'app-students',
               templateUrl: './students.component.html',
               standalone:  false,
           })
export class StudentsComponent implements OnInit {
    //empty array to hold students data
    // this is more for me than you guys, im used to vue ;)
    students: Student[] = [];
    filteredStudents: Student[] = [];
    selectedStudent: Student | null = null;
    showPassword = false;
    constructor(private studentsService: StudentsService, private searchService: SearchService) {}

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe((
            students: Student[]) => {
                console.log(students);
                this.students = students;
                this.filteredStudents = students;
        });
    }

    selectStudent(student: Student) {
        this.selectedStudent = student;
        this.showPassword = false;
    }

    togglePassword(event?: Event) {
        if (event) { event.preventDefault(); }
        this.showPassword = !this.showPassword;
    }

    classifyGradeColour(grade: number): Grades {
        return gradeToColor(grade);
    }

    onSearch(term: string) {
        const q = term.trim();
        if (!q) {
            this.filteredStudents = this.students;
            return;
        }

        this.searchService.search(q).subscribe(results => {
            this.filteredStudents = results;
        });
    }

}