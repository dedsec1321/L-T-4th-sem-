
import { Component } from '@angular/core';

@Component({
 selector:'app-attendance',
 templateUrl:'./attendance-tracker.component.html'
})
export class AttendanceTrackerComponent{

 status='Present';

 mark(){
  alert('Attendance marked as '+this.status);
 }

}
