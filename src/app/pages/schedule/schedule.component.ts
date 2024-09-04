import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CalendarModule} from "./calendar/calendar.module";
@Component({
    selector: "schedule",
    standalone: true,
    imports: [CommonModule, RouterOutlet, CalendarModule],
    styleUrls: ['schedule.component.scss'],
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent {
}
