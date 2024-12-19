import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChange } from '@angular/core';
import { ConfirmationService,LazyLoadEvent, MessageService } from 'primeng/api';
import { UserTrackDetailDao } from 'src/app/demo/domain/Dao/User/UserTrackingDao';
import { UserVehicleListDao } from 'src/app/demo/domain/Dao/User/UserVehicleDao';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/demo/service/user.service';

@Component({
    selector: 'app-usert-detail',
    templateUrl: './usert-detail.component.html',
    styleUrls: ['./usert-detail.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class UserTrackDetailComponent implements OnInit {

    cols: any[];
    userTrackDetail?: UserTrackDetailDao = null
    userVehicleDetail?: UserVehicleListDao = null
    selectedLogStatus: string = ""
    isWithinZone: string = ""
    rowsPerPageOptions = [10, 25, 50];
    totalRecords: number;
    totalRecordsForVehicle: number;
    loading: boolean = false;
    @ViewChild(Table, { static: false }) tableEvent;
    progressSpinner: boolean = false;
    searchValue: any;
    filterGlobalValue: any;
    @Input() bottomPanelActive: boolean
    @Input() userId: string
    @Output() onDetailClose = new EventEmitter<null>();
    startDate: string = ""
    endDate: string = ""
    userVehicleDetails: any[] = [];
    totalVehicleRecords: number = 0;
    @ViewChild('trackTable', { static: false }) trackTableEvent;
    @ViewChild('vehicleTable', { static: false }) vehicleTableEvent;


    ngOnInit(): void {}

    ngOnChanges(change: SimpleChange) {
        if (!!change["userId"] && !!change['userId'].currentValue) {
            this.loadUserTracksByUserId()
            this.loadUserVehiclesByUserId(this.vehicleTableEvent)
        }
    }

    constructor(private service: UserService) {
    }

    onDetailPanelClose() {
        if (localStorage.hasOwnProperty("userTrackHistoryDao-local")) {
            localStorage.removeItem("userTrackHistoryDao-local")
        }
        if (localStorage.hasOwnProperty("UserVehicleDao-local")) {
            localStorage.removeItem("UserVehicleDao-local")
        }
        this.userTrackDetail = null
        this.userVehicleDetail = null
        this.onDetailClose.emit(null)
    }

    loadUserTracksByUserId() {
        if (!this.userId) {
            return
        }
        const event = this.trackTableEvent;
        this.loading = true;
        setTimeout(() => {
            this.service.getUserTrackDetailResp(this.userId,
                this.selectedLogStatus,
                this.isWithinZone,
                !!this.startDate ? `&startDate=${this.startDate}&endDate=${this.endDate}` : "",
                ...(!!event ? [event.first / event.rows + 1,
                event.rows,
                event.globalFilter ?? this.searchValue,
                event.sortField,
                event.sortOrder
                ] : []),
            ).then(resp => {
                if (!this.userTrackDetail) {
                    
                    this.userTrackDetail = resp.data
                    this.totalRecords = resp.data.userTrackingList.rowCount
                } else {
                    this.userTrackDetail.userTrackingList.results = resp.data.userTrackingList.results
                }
                this.loading = false;
            })
        }, 1000);
    }

    loadUserVehiclesByUserId(event: LazyLoadEvent) {
        if (!this.userId) {
            return;
        }
    
        //const event = this.vehicleTableEvent;
        this.loading = true;
        
        setTimeout(() => {
            this.service.getUserVehicleDetailResp(
                this.userId,
                !!this.startDate ? `&startDate=${this.startDate}&endDate=${this.endDate}` : "",              
                ...(!!event ? [               
                    event.first / event.rows + 1,    
                    event.rows,                    
                    event.globalFilter ?? this.searchValue,
                    event.sortField,
                    event.sortOrder                 
                ] : []),
            ).then(resp => {           
                if (!this.userVehicleDetail) {
                    this.userVehicleDetail = resp.data;
                    this.totalRecordsForVehicle = resp.data.userVehicleList.rowCount;
                } else {
                    this.userVehicleDetail.userVehicleList.results = resp.data.userVehicleList.results;
                }
                this.loading = false;
            }).catch(error => {
                console.error("Error loading user vehicle details", error); 
                this.loading = false; 
            });
        }, 1000);
    }
    
    

    onDateChange(data) {
        this[`${data.type}Date`] = data.date
    }

    onRangeChange(reset) {
        if (reset) {
            this.startDate = ""
            this.endDate = ""
        } this.loadUserTracksByUserId()
    }

    onRangeChangeVehicle(reset) {
        if (reset) {
            this.startDate = ""
            this.endDate = ""
        }
        this.loadUserVehiclesByUserId(this.vehicleTableEvent)
    }

    resetDataTable(dt) {
        localStorage.removeItem("UserVehicleDao-local");
        this.searchValue = null;
        dt.reset();
        this.filterGlobalValue = null;
    }
}


