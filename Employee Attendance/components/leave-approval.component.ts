
import { Component } from '@angular/core';
import { LeaveService } from '../services/leave.service';

@Component({
 selector:'app-leave-approval',
 templateUrl:'./leave-approval.component.html'
})
export class LeaveApprovalComponent{

 constructor(public service:LeaveService){}

 approve(id:number){
  this.service.updateStatus(id,'Approved');
 }

 reject(id:number){
  this.service.updateStatus(id,'Rejected');
 }

}
