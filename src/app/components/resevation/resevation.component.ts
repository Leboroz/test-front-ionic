import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservation',
  templateUrl: './resevation.component.html',
  styleUrls: ['./resevation.component.scss'],
  imports: [DatePipe, IonIcon, NgOptimizedImage],
})
export class ResevationComponent {
  @Input() speciality: string = '';
  @Input() title: string = '';
  @Input() date!: Date;
  @Input() duration: number = 0;

  constructor() { }


  getDurationFormat(): string {
    const pad = (n: number, z = 2) => ('00' + n).slice(-z);

    const hours = Math.floor((this.duration / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((this.duration / (1000 * 60)) % 60);
    const seconds = Math.floor((this.duration / 1000) % 60);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

}
