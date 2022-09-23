import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DswAvailabilityComponent } from './dsw-availability/dsw-availability.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TabsComponent } from './tabs/tabs.component';
// import { MomentUtcDateAdapter } from './moment-utc-date-adapter';
import {MatTabsModule,} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DswAvailabilityComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,
    CalendarModule,
    MatMomentDateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),NgbModalModule,
    ReactiveFormsModule,
    DatePipe,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatDatepickerModule, // provides moment date adapter
    MatMomentDateModule,
    MatTabsModule,
    MatStepperModule,
    NgbModule,
    FormsModule
    
    
    
    
    
    // CalendarHeaderComponent
    
  ],
  // providers: [DatePipe,{ provide: DateAdapter, useClass: MomentUtcDateAdapter }],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
