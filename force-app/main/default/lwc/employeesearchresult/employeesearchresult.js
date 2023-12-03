import { LightningElement,api } from 'lwc';
const columns = [
    { label: 'Employee Id', fieldName: 'id' },
    { label: 'Employee Name', fieldName: 'name'},
    { label: 'Employee Email', fieldName: 'email'},
    { label: 'Experience', fieldName: 'experiences'},
    { label: 'Comments', fieldName: 'comment'},
];

export default class Employeesearchresult extends LightningElement {
    columns = columns;
    @api searchresults=[];
}