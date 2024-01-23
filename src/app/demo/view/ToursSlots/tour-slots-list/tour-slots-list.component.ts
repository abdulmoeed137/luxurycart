import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TourSlots } from 'src/app/demo/domain/Dao/tourSlots/TourSlots';
import { TourService } from 'src/app/demo/service/tour.service';
import { TourSlotsMainComponent } from '../tour-slots-main/tour-slots-main.component';

@Component({
  selector: 'app-tour-slots-list',
  templateUrl: './tour-slots-list.component.html',
  styleUrls: ['./tour-slots-list.component.scss']
})
export class TourSlotsListComponent implements OnInit {
  mainloding: boolean = true;
  event_status: any;
  filterGlobalValue: any;
  tourStatusValue: number = 7;
  startDate: any;
  endDate: any;
  toursSlots: TourSlots[];
  totalRecords: number;
  rowsPerPageOptions = [10, 25, 50];
  cols: any[];
  selectedStatus: number = 7
  constructor(private _tourService: TourService, public main: TourSlotsMainComponent,) {
    localStorage.removeItem("adac");
   }

  ngOnInit() {

  }
  loadTourSlots(event: LazyLoadEvent) {
    this.mainloding = true;
    this.event_status = event;
    setTimeout(() => {
        this._tourService.getTourTimes(
            event.first / event.rows + 1,
            event.rows,
            event.globalFilter ?? this.filterGlobalValue,
            event.sortField,
            event.sortOrder,
            this.tourStatusValue,
        ).then(res => {
          this.mainloding = false;
            this.toursSlots = res.results;
            console.log(res.results)
            this.totalRecords = res.rowCount;
        })
    }, 1000);
}

}
