import { Component, OnInit, Input } from '@angular/core';
import { Entity } from 'src/app/entity/Entity';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel, NgOptimizedImage],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() dateOfBirth = new Date();
  @Input() address = '';

  constructor() { }

  ngOnInit() { }
}
