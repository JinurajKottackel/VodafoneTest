class VFBusinessPortalPage{
    
    //class variables

     Reject_Button = '.dip-consent-btn';
     Username_TextBox = 'input[id="username"]';
     Password = 'input[type="password"]';
     NextButton = ('[data-cy = "login"]')
     RegisterButon = ('[data-cy = "register"]')
     Accord_Container = ('[data-cy = "accordion-container"]')
     HeadLine = ('[data-cy = "headline"]')
     Accord_SubItems = ('[data-cy = "accordion-item-text visible"]')
     Accord_SubItems_ListAll = ('[class ="ItemRow-sc-y2a33r kabpbc"]')
    

   // Reject the Consent 
    clickRejectCosent(){
        cy.get(this.Reject_Button).first().click()
    }
  
    // Method for Verifying Username Textbox
    verifyUsernameTextBox(){
        cy.get(this.Username_TextBox).should('have.attr', 'maxlength', '64')
        .and('have.attr', 'placeholder', 'Benutzername *')
        
    }
    //Method for entering text in Userr name Field
    typeUsername(usrname){
        
        cy.get(this.Username_TextBox).type(usrname)
    }

    // Method for verifying Password Textbox
    verifyPasswordTextBox(){
        cy.get(this.Password).should('have.attr', 'maxlength', '64')
         .and('have.attr', 'placeholder', 'Portal-Passwort *')
       
    }

     // Method for entering Password for Password field 
    typePassword(passwrd){
        
        cy.get(this.Password).type(passwrd)
    }
    
    //Checking the attributes of Weiter Button before filling the username / Password fields
    verifyNextButtonBefore(){

        cy.get(this.NextButton).should('have.attr', 'type', 'submit')
         .and('have.attr', 'disabled')
    }

    //Checking the attributes of Weiter Button after filling the username(min2) / Password (min8)fields
    verifyNextButtonAfter(){
        cy.get(this.NextButton).should('not.have.attr', 'disabled')
    }

    //Cliking on the Weiter Button
    clickNextButton(){
        cy.get(this.NextButton).should('have.attr', 'type', 'submit').click()
    }

    //Checking the Zu Registrierung Button 
    checkRegisterButton(){
    cy.get(this.RegisterButon).should('have.attr', 'href', '/business/business-portale/registrierung.html')
    }
    //Clicking on the Zu Registrierung Button 
    clickRegisterButton(){
    cy.get(this.RegisterButon).should('have.attr', 'href', '/business/business-portale/registrierung.html').click()
    }


   
   //Checking the Texts available in Unsere weiteren Services
    otherServices(accHLList){

        cy.get(this.Accord_Container).get(this.HeadLine).
        
        each(($e1, index, $list) => {

            const text= $e1.text()
            console.log(text)
            if (accHLList.includes(text)) {
                // Placeholder for some checks in the future
                cy.log(text + " Text Found")
            }   
            else {
                cy.log(text + " is not found in accordion entry")
            }      

        })
    }

    otherServicesSubItems(accHLList,subitemsList){
        cy.get(this.Accord_Container).get(this.HeadLine).
           each(($e1, index, $list) => {
            const text= $e1.text()
            
            if (accHLList.includes(text)) {
                //console.log(text + "Root Pass")
                cy.get(this.HeadLine).contains(text).click()
            }      
            
        })
        cy.get(this.Accord_SubItems).get(this.Accord_SubItems_ListAll).
        each(($e2, index2, $list2) => {
           const text2 = $e2.text()
       
            if (subitemsList.includes(text2)) {
                // Placeholder for some checks in the future
                //cy.log(text2 + " Text Found")
             }   
            else {
                cy.log(text2 + " is not found in Subaccordion entry")
             }   

        })
    }

}
export default VFBusinessPortalPage;