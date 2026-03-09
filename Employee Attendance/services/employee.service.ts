
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({providedIn:'root'})
export class EmployeeService{

 employees:Employee[]=[
  {id:1,name:'John',department:'IT'},
  {id:2,name:'Anna',department:'HR'}
 ];

 getEmployees(){
  return this.employees;
 }

 addEmployee(emp:Employee){
  this.employees.push(emp);
 }

}
