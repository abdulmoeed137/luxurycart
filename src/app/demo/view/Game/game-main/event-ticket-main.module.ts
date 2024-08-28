import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { IconService } from 'src/app/demo/service/iconservice';
import { ManageIotService } from 'src/app/demo/service/manage-iot.service';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DateRangeComponentModule } from '../../DateRange/date-range.component.module';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { NamedObservableService } from 'src/app/demo/service/named-observable.service';
import { GameMainRoutingModule } from './event-ticket-main-routing.module';
import { GameMainComponent } from './game-main.component';
import { GameListComponent } from '../game-list/game-list.component';
import { GameCreateComponent } from '../game-create/game-create.component';
import { GameUpdateComponent } from '../game-update/game-update.component';


@NgModule({
    declarations: [GameMainComponent,GameListComponent,GameCreateComponent,GameUpdateComponent],
    imports: [
        CommonModule,
        GameMainRoutingModule,
        TableModule,
        TabViewModule,
        PanelModule,
        ButtonModule,
        ToolbarModule,
        DialogModule,
        ToastModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        RippleModule,
        ConfirmDialogModule,
        ProgressSpinnerModule,
        DropdownModule,
        SidebarModule,
        PanelModule,
        CheckboxModule,
        InputTextModule,
        DateRangeComponentModule,
        PasswordModule,
         CalendarModule 
    ],
    providers: [
        ManageIotService,
        IconService,
        MessageService,ConfirmationService,NamedObservableService
    ]
})
export class GameMainModule { }