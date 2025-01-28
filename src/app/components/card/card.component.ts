import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonCardHeader, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCardHeader, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel, NgOptimizedImage],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() dateOfBirth = new Date();
  @Input() address = '';
  @Output() click = new EventEmitter()

  constructor() { }

  ngOnInit() { }
}
