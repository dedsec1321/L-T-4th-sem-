
import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
 selector:'app-employee-list',
 templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent{

 employees:any[]=[];
 name='';
 department='';

 constructor(private service:EmployeeService){
  this.employees=this.service.getEmployees();
 }

 add(){
  const emp={id:Date.now(),name:this.name,department:this.department};
  this.service.addEmployee(emp);
  this.name='';
  this.department='';
 }

}
