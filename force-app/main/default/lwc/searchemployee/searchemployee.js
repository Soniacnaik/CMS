import { LightningElement } from 'lwc';
import getEmployee from '@salesforce/apex/SearchEmployee.getemployeeDetails'
import getEmployeebyEmail from '@salesforce/apex/SearchEmployeeByEmail.getemployeeDetails'

export default class Searchemployee extends LightningElement {
    employeeName;
    employeeEmail;

 
    handleOnChangeEmployeeName(event){
        this.employeeName=event.target.value;
    }
    handleOnChangeEmployeeEmail(event){
        this.employeeEmail=event.target.value;
    }
 
    clearSearch(){
        this.employeeName="";
        this.employeeEmail="";
        getEmployee({employeeName:this.employeeName}).then(result=>{
            this.dispatchEvent(new CustomEvent('getemployeedetails',{detail:result}))
        }).catch(error=>{console.log(error)})
    }
 
    initiateSearch(){
        if (this.employeeName!=""){
        getEmployee({employeeName:this.employeeName}) // Promise call Internally
        .then(result=>{this.dispatchEvent(new CustomEvent('getemployeedetails',{detail:result}))
    })
        .catch(error=>{console.log(error)})
    }
    else{
        getEmployeebyEmail({employeeEmail:this.employeeEmail}) // Promise call Internally
        .then(result=>{this.dispatchEvent(new CustomEvent('getemployeedetails',{detail:result}))
    })
        .catch(error=>{console.log(error)})
    }
}
}