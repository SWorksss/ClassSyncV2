import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { scheduler } from "dhtmlx-scheduler";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "schedule",
    styleUrls: ['schedule.component.scss'],
    templateUrl: 'schedule.component.html'
})


export class ScheduleComponent implements OnInit {
    @ViewChild("scheduler_here", { static: true }) scheduleContainer!: ElementRef;

    ngOnInit() {
        scheduler.init(this.scheduleContainer.nativeElement, new Date(2024, 9, 1));
    }
}
