import { Component, OnInit } from '@angular/core';
import { Ridedao } from 'src/app/demo/domain/Dao/Rides/Ridedao';
import { EditRideDto } from 'src/app/demo/domain/Dto/Rides/EditRideDto';
@Component({
  selector: 'app-ride-main',
  templateUrl: './ride-main.component.html',
  styleUrls: ['./ride-main.component.scss']
})
export class RideMainComponent implements OnInit {
  
  bottomPanelClick: boolean;
  bottomPanelActive: boolean;
  ride: Ridedao;
  event: Event;
  editRideData:EditRideDto;
  editPanelActive:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  
  onBottomPanelButtonClick(event, ride) {
    this.ride = ride;
    this.bottomPanelClick = true;
    this.bottomPanelActive = !this.bottomPanelActive;
    event.preventDefault();
  }

  onBottomPanelClick() {
    this.bottomPanelClick = true;
  }

  onChange(event){
    this.event = event;
  }

  onEditPanelButtonClick(event, editRideData: EditRideDto) {
    this.editRideData = editRideData;
    this.editPanelActive = !this.editPanelActive;
    event.preventDefault();
    this.event = null;
}

}
