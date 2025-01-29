import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Class } from 'src/app/entity/Class';
import { Student } from 'src/app/entity/Student';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
  standalone: false,
})
export class ClassesPage implements OnInit {

  classes$!: Observable<Class[]>;
  copy!: Observable<Class[]>;
  users$!: Observable<Student[]>;
  value: string = '';
  constructor(private http: RestService) { }

  ngOnInit() {
    this.classes$ = this.http.getClasses();
    this.users$ = this.http.getUsers();
    this.copy = this.classes$;
  }

  onChangeFilter(event: any) {
    const searchTerm = event.target.value;

    if (searchTerm === '') {
      this.classes$ = this.copy;
    } else {
      this.classes$ = this.copy.pipe(
        map(
          (classes: Class[]) => classes.filter(
            (c: Class) => c.student.id === searchTerm
          )
        )
      );
    }
  }

}
