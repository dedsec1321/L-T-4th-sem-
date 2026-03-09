
import { Injectable } from '@angular/core';
import { LeaveRequest } from '../models/leave';

@Injectable({providedIn:'root'})
export class LeaveService{

 leaves:LeaveRequest[]=[];

 getLeaves(){
  return this.leaves;
 }

 applyLeave(l:LeaveRequest){
  this.leaves.push(l);
 }

 updateStatus(id:number,status:string){
  const leave=this.leaves.find(x=>x.id===id);
  if(leave) leave.status=status;
 }

}
