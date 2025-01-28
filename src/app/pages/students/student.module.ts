import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { CardComponent } from 'src/app/components/card/card.component';
import { SearchComponent } from 'src/app/components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    CardComponent,
    SearchComponent,
    AsyncPipe,
  ],
  declarations: [StudentPage]
})
export class StudentPageModule { }
