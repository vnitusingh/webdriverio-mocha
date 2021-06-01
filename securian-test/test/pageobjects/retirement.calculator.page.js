const Page = require('./page');

//For main retirement calculator page
class RetirementCalculatorPage extends Page{

    open(){
        super.open('https://www.securian.com/insights-tools/retirement-calculator.html');
    }

    get currentAgeInput () { return $('#current-age') }
    async setCurrentAge (currentAge) {await (await this.currentAgeInput).setValue(currentAge);}

    get retirementAgeInput(){ return $('#retirement-age'); }
    async setRetirementAge (retirementAge) {await (await this.retirementAgeInput).setValue(retirementAge);}

    get currentAnnualIncomeInput(){ return $('#current-income'); }
    async setCurrentAnnualIncome (currentAnnualIncome) {await (await this.currentAnnualIncomeInput).setValue(currentAnnualIncome);}

    get spouseAnnualIncomeInput(){ return $('#spouse-income'); }
    async setSpouseAnnualIncome (spouseAnnualIncome) {await (await this.spouseAnnualIncomeInput).setValue(spouseAnnualIncome);}

    get retirementSavingsBalanceInput(){ return $('#current-total-savings'); }
    async setRetirementSavingsBalance (retirementSavingsBalance) {await (await this.retirementSavingsBalanceInput).setValue(retirementSavingsBalance);}

    get currentSavingsRateInput(){ return $('#current-annual-savings'); }
    async setCurrentSavingsRate (currentSavingsRate) {await (await this.currentSavingsRateInput).setValue(currentSavingsRate);}

    get savingsIncreaseRateInput(){ return $('#savings-increase-rate'); }
    async setsavingsIncreaseRate (savingsIncreaseRate) {await (await this.savingsIncreaseRateInput).setValue(savingsIncreaseRate);}



    get socialSecurityIncomeToggleNo(){  return $('[for="no-social-benefits"]'); }//name; value is "Y" or "N"
    get socialSecurityIncomeToggleYes(){  return $('[for="yes-social-benefits"]'); }//name; value is "Y" or "N"

    async setSocialSecurityIncomeToggle(YesOrNo){
        if(YesOrNo.toLowerCase() == "yes"){
            const el = await this.socialSecurityIncomeToggleYes
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
        else{
            const el = await this.socialSecurityIncomeToggleNo
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
        
    }

    get maritalStatusToggleSingle(){return $('[for="single"]');} //name; id is single or married
    get maritalStatusToggleMarried(){return $('[for="married"]');} //name; id is single or married

    async setMaritalStatusToggle(MaritalStatus){
        
        if(MaritalStatus.toLowerCase() == "married"){
            const el = await this.maritalStatusToggleMarried
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
        else{
            el = await this.maritalStatusToggleSingle
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
    }

    get socialSecurityOverrideAmountInput(){ return $('#savings-increase-rate'); }
    async setSSOverrideAmount (SSOverrideAmount) {await (await this.socialSecurityOverrideAmountInput).setValue(SSOverrideAmount);}

    get adjustDefaultValuesLink() {return $('=Adjust default values') }
    async clickAdjustDefaultValuesLink(){ await (await this.adjustDefaultValuesLink).click();}

    get calculateBtn(){ return $('[ data-tag-id="submit"]'); }
    async clickCalculateButton(){ 
            const el = await this.calculateBtn
            await el.waitForClickable();
            el.moveTo();
            await el.click()
    }


    get retirementAmountResults() {return $('#retirement-amount-results')}



}
module.exports = new RetirementCalculatorPage();