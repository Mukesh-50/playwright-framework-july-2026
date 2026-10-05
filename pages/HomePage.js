import { BasePage } from "./BasePage";

export class HomePage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.page = page;
        this.addtoCart=page.locator('button').filter({hasText:'Add to Cart'}).first()
        this.cartButton=page.locator('.cartBtn')
        this.enrollButton=page.getByRole('button', { name: 'Enroll Now' })
        this.addressField= page.locator('#address')
        this.phoneNum= page.locator('#phone')
        this.submit= page.locator('.action-btn').filter({ hasText: 'Enroll Now' }).first()
        this.successMessg= page.locator(".uniqueId")
        this.cancelButton= page.getByRole('button', { name: 'Cancel' })
    }
     async navigateToHomePage() {
        await this.page.goto('/');
    }
    async cancelPopup()
    {
        await this.click(this.cancelButton)
    }
    async enrollToCourse() 
    {
        await this.click(this.addtoCart)
        await this.click(this.cartButton)
        await this.click(this.enrollButton)
        await this.type(this.addressField,'pune')
        await this.type(this.phoneNum,'7567576585')
        await this.click(this.submit)

    }

}