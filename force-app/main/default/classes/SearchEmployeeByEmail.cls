public class SearchEmployeeByEmail {
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getemployeeDetails(String employeeEmail){
        if (employeeEmail==''){
            return null;
        }
        List<Employee__c> employees=[SELECT Emp_ID__c,name,Emp_Email__c,Comments__c,Experience__c FROM Employee__c 
                                        WHERE Emp_Email__c=:employeeEmail ];
        return employees;
    }
}