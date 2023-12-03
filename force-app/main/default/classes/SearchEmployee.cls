public class SearchEmployee {
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getemployeeDetails(String employeeName){
        if (employeeName==''){
            return null;
        }
        employeeName='%'+employeeName+'%';
        List<Employee__c> employees = [SELECT Emp_ID__c,name,Emp_Email__c,Comments__c,	Experience__c FROM Employee__c 
                                        WHERE name LIKE : employeeName];
        return employees;
    }
}