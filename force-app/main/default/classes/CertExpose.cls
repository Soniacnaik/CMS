@RestResource(urlMapping='/CertExpose/*')
global class CertExpose {
    @httpGet
    global static List<Certification__c> getCert(){
        List<Certification__c> cer = [select name,Comments__c from Certification__c];
        return cer;
    }
   /* @httpPost
    global static void createCert(List<Certification__c> CertRecord){
        insert CertRecord; 
    }  */     
}