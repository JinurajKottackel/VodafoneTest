// This class contains vriables and methods for accesing Vodafone Business webpage
class VFBusinessPage{

    webelemnts ={
        Business_Portl : () => cy.xpath('//a[@aria-label="Business-Portale"]')
    }
    
    
    clickBusinessPortal(){
        //cy.get('[aria-label = "Business-Portale"]').click();
        this.webelemnts.Business_Portl().click();
                
    }
}
export default VFBusinessPage;
