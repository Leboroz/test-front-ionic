import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorsPageRoutingModule } from './tutors-routing.module';

import { TutorsPage } from './tutors.page';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { SegmentsComponent } from 'src/app/components/segments/segments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorsPageRoutingModule,
    SearchComponent,
    CardComponent,
    SegmentsComponent,
  ],
  declarations: [TutorsPage]
})
export class TutorsPageModule { }
