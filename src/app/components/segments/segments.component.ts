import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
  imports: [IonSegment, IonSegmentButton, IonLabel, AsyncPipe],
})
export class SegmentsComponent implements OnInit {
  @Input() data!: Observable<any>;
  @Input() segments$!: Observable<string[]>;
  @Input() segmentName: string = '';
  copy!: Observable<any>;
  @Output() updateDataEvent = new EventEmitter();
  currentSegment: string = '';

  constructor() {

  }

  ngOnInit() {
    this.copy = this.data
  }

  onClickSpecialty(event: any) {
    const segment = event.target.value;
    if (this.currentSegment === segment) {
      event.target.classList.remove('segment-button-checked')
      this.data = this.copy;
      this.updateDataEvent.emit(this.data);
      this.currentSegment = '';
      return;
    }

    if (segment === '') {
      this.data = this.copy;
    } else {
      this.data = this.copy.pipe(map((data: any) => data.filter((item: any) => {
        return (
          item[this.segmentName] === segment
        );
      })));
    }
    this.currentSegment = segment;
    this.updateDataEvent.emit(this.data);
  }

}
