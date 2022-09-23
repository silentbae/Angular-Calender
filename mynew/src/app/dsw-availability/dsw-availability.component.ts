import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours,} from 'date-fns';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import * as moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { extendMoment } from 'moment-range';
import { DatePipe } from '@angular/common';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',    
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


const colors: any = {
  red: {
    primary: '#FF8B00 ',
    secondary: '#FAE3E3',
  },
};


@Component({
  selector: 'app-dsw-availability',
  templateUrl: './dsw-availability.component.html',
  styleUrls: ['./dsw-availability.component.scss'],
  providers: [
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class DswAvailabilityComponent implements OnInit {
  events: CalendarEvent[] = [];
  dswAvailabilityForm!: FormGroup;
  selectedDays : any[] =[];
  data : Array<any>=[
    {name:'monDay',value:'monDay'},
    {name:'tueDay',value:'tueDay'},
    {name:'wedDay',value:'wedDay'},
    {name:'thuDay',value:'thuDay'},
    {name:'friDay',value:'friDay'},
    {name:'satDay',value:'satDay'},
    {name:'sunDay',value:'sunDay'},
    ];
  divStatus: boolean | undefined;
  chkBox: boolean = false;
  

  
 

  @ViewChild('modalContent', { static: true })
  modalContent!: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  permissions = [];
  modalData!: { 
    action: string;
    event: CalendarEvent;
  };
  availStartDate: Date | undefined;
  endDate!: Date;
  



  constructor( private formBuilder: FormBuilder,private datePipe:DatePipe){ 
      this.dswAvailabilityForm = this.formBuilder.group({
      checkArray: this.formBuilder.array([], [Validators.required]),
    });} 


  ngOnInit(): void {
    this.dswAvailabilityForm = this.formBuilder.group({
      dswAvailibilityId: [''],
      fromDate: ['', [Validators.required]],
      endDate: [''],
      monDay: [''],
      tueDay: [''],
      wedDay: [''],
      thuDay: [''],
      friDay: [''],
      satDay: [''],
      sunDay: [''],
    });
  }
  setView(view: CalendarView) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
   // this.activeDayIsOpen = false;
  }
addEvent(events_date: Date): void {
  this.events = [...this.events,
  {
    title: 'New event',
    start: startOfDay(new Date(events_date)),
    end: endOfDay(new Date(events_date)),
    color: colors.red,
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
  },];
    console.log("Event Added",this.events)
}


date(){
  // const fromDate = moment(this.dswAvailabilityForm.controls['fromDate'].value);

    console.log("Selected Date :",this.datePipe.transform(this.dswAvailabilityForm.controls['fromDate'].value,'yyyy-MM-dd'))
}



onSubmit(){
    if (this.dswAvailabilityForm.valid) {
      this.chkBox = this.validate(this.dswAvailabilityForm.value);
      if (this.chkBox === true){   
        //console.log(this.dswAvailabilityForm.value);
        let monDay = this.dswAvailabilityForm.value.monDay;
        let tueDay = this.dswAvailabilityForm.value.tueDay;
        let wedDay = this.dswAvailabilityForm.value.wedDay;
        let thuDay = this.dswAvailabilityForm.value.thuDay;
        let friDay = this.dswAvailabilityForm.value.friDay;
        let satDay = this.dswAvailabilityForm.value.satDay;
        let sunDay = this.dswAvailabilityForm.value.sunDay;
        if ((monDay === true)){
          // this.myData = [this.dswAvailabilityForm.value]
         this.selectedDays.push('Monday');
        }
        if(tueDay === true){
          this.selectedDays.push('Tuesday');
        }
        if(wedDay === true){
          this.selectedDays.push('Wednesday');
        }
        if(thuDay === true){
          this.selectedDays.push('Thursday');
        }
        if(friDay === true){
          this.selectedDays.push('Friday');
        }
        if(satDay === true){
          this.selectedDays.push('Saturday');
        }
        if(sunDay === true){
          this.selectedDays.push('Sunday');
        }
        //this.myData = this.dswAvailabilityForm.value;
        console.log("myDays",this.selectedDays);
        this.events =[];
      } 
    }
    const selected_fromDate = this.datePipe.transform(this.dswAvailabilityForm.controls['fromDate'].value,'yyyy-MM-dd')
    const selected_endDate = this.datePipe.transform(this.dswAvailabilityForm.controls['endDate'].value,'yyyy-MM-dd')
    const actual_startDate = moment(selected_fromDate);
    const actual_endDate = moment(selected_endDate);
    // const autual_endDate = moment(autual_startDate, "DD-MM-YYYY").add('days', 90);
    console.log("end_Date "+actual_endDate);
    for (let selected_Day of this.selectedDays){
      var day_Count = moment(actual_startDate).startOf('day').day(selected_Day);
      if (day_Count.date() > 7) 
         day_Count.add(7, 'd');
        while (actual_endDate > day_Count){
          const events_date = new Date(day_Count.toString());
          this.addEvent(events_date);
          day_Count.add(7, 'd');
        }
      }
    this.selectedDays = [];
    return true
}

hideMsg($event: { checked: boolean; }){
    if ($event.checked === true) {
      this.divStatus = false;
    } else{
      if (this.chkBox === false) {
        this.divStatus = true;
      }
      console.log(this.dswAvailabilityForm.value);
    }
}
validate(data: { monDay: string | boolean; monNight: string | boolean; monSleepOver: string | boolean; monAfterNoon: string | boolean; tueDay: string | boolean; tueNight: string | boolean; tueSleepOver: string | boolean; tueAfterNoon: string | boolean; wedDay: string | boolean; wedNight: string | boolean; wedSleepOver: string | boolean; wedAfterNoon: string | boolean; thuDay: string | boolean; thuNight: string | boolean; thuSleepOver: string | boolean; thuAfterNoon: string | boolean; friDay: string | boolean; friNight: string | boolean; friSleepOver: string | boolean; friAfterNoon: string | boolean; satDay: string | boolean; satNight: string | boolean; satSleepOver: string | boolean; satAfterNoon: string | boolean; sunDay: string | boolean; sunNight: string | boolean; sunSleepOver: string | boolean; sunAfterNoon: string | boolean; }){
    if ((data.monDay === '' || data.monDay === false) &&
        (data.tueDay === '' || data.tueDay === false) &&
        (data.wedDay === '' || data.wedDay === false) &&
        (data.thuDay === '' || data.thuDay === false) &&
        (data.friDay === '' || data.friDay === false) &&
        (data.satDay === '' || data.satDay === false) &&
        (data.sunDay === '' || data.sunDay === false)){
        return false;
      } else {
        return true;
      }
  }      
}
