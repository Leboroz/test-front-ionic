import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Tutor } from 'src/app/entity/Tutor';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {

  tutors$!: Observable<Tutor[]>;
  specialities!: Observable<string[]>;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.tutors$ = this.restService.getTutors();
    this.specialities = this.tutors$.pipe(map((tutors) => tutors.map(tutor => tutor.speciality)));
  }

  updateTutors(data: Observable<Tutor[]>) {
    this.tutors$ = data;
  }

}
