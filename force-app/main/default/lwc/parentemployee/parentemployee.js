import { LightningElement } from 'lwc';

export default class Parentemployee extends LightningElement {
    searchDetail=[];
    handleEmployee(event){
        this.searchDetail=[];
        try{
            event.detail.forEach(element => {
                var custData={
                    id:element.Emp_ID__c,
                    name:element.Name,
                    email:element.Emp_Email__c,
                    experiences:element.Experience__c,
                    comment:element.Comments__c
                }
                this.searchDetail.push(custData);
            });
        }catch(e){
            console.log(e);
        }
    }
}