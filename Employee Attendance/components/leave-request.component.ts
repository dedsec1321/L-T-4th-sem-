
import { Component } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
 selector:'app-leave-request',
 templateUrl:'./leave-request.component.html'
})
export class LeaveRequestComponent{

 reason='';

 constructor(private service:LeaveService){}

 apply(){
  this.service.applyLeave({
   id:Date.now(),
   employeeId:1,
   reason:this.reason,
   status:'Pending'
  });
  this.reason='';
 }

}
