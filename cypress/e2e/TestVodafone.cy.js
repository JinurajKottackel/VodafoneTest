import VFBusinessPortalPage from "../PageObjectClasses/VFBusinessPortal";
import VFBusinessPage from "../PageObjectClasses/VFBusiness";


describe('Navigate to Business Portal and check details', () => {
  it('pass1', () => {

    const VFBP= new VFBusinessPage();
    const VFBPP= new VFBusinessPortalPage();
    const Username ='myusername'
    const Password='mypassword'
    const AccHLList = [ "Sichere Kommunikation","Cloud & Hosting","Auftragsverwaltung","Rechnungen","Standortvernetzung","Internet of Things","Unified Communication / Sprache","Services"]
    const SubAccHLList = ["Vodafone Security NetInfo","Secure Enterprise MessagingInfo","Vodafone CorporateDataAccessInfo", "Microsoft Office 365Info","Alibaba Cloud von VodafoneInfo","Vodafone Business Multicloud Platform","Bestell-CenterInfo","Rechnungs-AnalyseInfo","Vodafone Company NetInfo","Ethernet Business Service","Business Internet Connect","Vodafone CorporateVPNInfo","Vodafone Business SD-WANInfo","Internet of Things (IoT)Info","Anlagen-Anschluss Plus (OneView Portal)","One Net BusinessInfo","Zu Vodafone ConferencingInfo","Service-Rufnummern & Contact CenterInfo","Service Monitor","Easy TicketInfo","Vodafone Performance Monitor"]

    //Opening the Vodafobe Business Home page
    cy.visit('/')   

    //Cling on the Business Portal Button
    VFBP.clickBusinessPortal();
    
    //Rejecting the Consent
    VFBPP.clickRejectCosent();

    //Verfing the Texts listed in weiteren Services
    VFBPP.otherServices(AccHLList);

    //Verify the attributes of Username Text box
    VFBPP.verifyUsernameTextBox();
    // Verfy the attributes of Password field 
    VFBPP.verifyPasswordTextBox();
    
    //Checking whether the Weiter Button is is disabled when username and password are not entered
    VFBPP.verifyNextButtonBefore();
    
    //Entering username in user name field
    VFBPP.typeUsername(Username);
    // Entering password in Pasword field
    VFBPP.typePassword(Password);

    // Cheking the Weiter Button is activated after entering username and password
    VFBPP.verifyNextButtonAfter();

    // Cheking if the Zur Registrierung button exits
    VFBPP.checkRegisterButton();
    
    // Verfing the Sub Texts listed in weiteren Services Dropdowns for all items
    VFBPP.otherServicesSubItems(AccHLList,SubAccHLList);
  })
})

