import { Locator,Page, expect } from "@playwright/test";

class HomePage{
    page: Page;
    browseEvents: Locator;
    homePageHeading: Locator;
   
    dilliDiwaliMelaLink: Locator;
  

    constructor(page : Page){

        this.page = page;
        this.browseEvents = page.getByRole('link', {
            name: 'Browse Events',
        exact: true
        });
        this.dilliDiwaliMelaLink = page.getByRole('link',{ name: 'Dilli Diwali Mela '});
        this.homePageHeading = page.getByRole('heading', { name: 'Discover & Book' });

    }
   async clickBrowseEvents(){
        await this.browseEvents.click();
    
    }
    async clickDilliDiwaliMela(){
        await this.dilliDiwaliMelaLink.click();
    }
    async verifyHomePage(){
        await expect(this.homePageHeading).toBeVisible();
    }

}
export default HomePage;