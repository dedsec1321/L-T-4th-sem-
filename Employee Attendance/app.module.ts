
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list.component';
import { AttendanceTrackerComponent } from './components/attendance-tracker.component';
import { LeaveRequestComponent } from './components/leave-request.component';
import { LeaveApprovalComponent } from './components/leave-approval.component';
import { DashboardComponent } from './components/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AttendanceTrackerComponent,
    LeaveRequestComponent,
    LeaveApprovalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
