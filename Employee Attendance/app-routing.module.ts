
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { EmployeeListComponent } from './components/employee-list.component';
import { AttendanceTrackerComponent } from './components/attendance-tracker.component';
import { LeaveRequestComponent } from './components/leave-request.component';
import { LeaveApprovalComponent } from './components/leave-approval.component';

const routes: Routes = [
 { path:'', component: DashboardComponent },
 { path:'employees', component: EmployeeListComponent },
 { path:'attendance', component: AttendanceTrackerComponent },
 { path:'leave', component: LeaveRequestComponent },
 { path:'approval', component: LeaveApprovalComponent }
];

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule {}
