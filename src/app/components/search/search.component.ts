import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';
import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonSearchbar],
})
export class SearchComponent implements OnInit {
  @Input() data: any = []; // Your original data array
  copy: any = []; // Array to hold filtered results
  @Output() updateDataEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.copy = this.data
  }

  updateData() {
  }

  onSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.copy.subscribe((c: any) => console.log(c));

    if (searchTerm === '') {
      this.data = this.copy;
    } else {
      this.data = this.copy.pipe(map((data: any) => data.filter((item: any) => {
        const name = item.firstName + item.lastName;
        return (
          name.toLowerCase().includes(searchTerm)
        );
      })));
    }
    this.updateDataEvent.emit(this.data);
  }

}
