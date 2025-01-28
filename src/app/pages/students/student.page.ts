import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/entity/Student';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {

  users$!: Observable<Student[]>;

  constructor(private restService: RestService) { }


  ngOnInit() {
    this.users$ = this.restService.getUsers();
  }

  updateStudents(data: Observable<Student[]>) {
    this.users$ = data;
  }

}
