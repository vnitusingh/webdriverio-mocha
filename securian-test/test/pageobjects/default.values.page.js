const Page = require('./page');
//For changing default values of the calculator
class DefaultValuesPage extends Page {
    
    get additionalIncomeInput () { return $('#additional-income') }
    async setAdditionalIncome (additionalIncome) {await (await this.additionalIncomeInput).setValue(additionalIncome);}

    get retirementDurationInput () { return $('#retirement-duration') }
    async setRetirementDuration (retirementDuration) {await (await this.retirementDurationInput).setValue(retirementDuration);}

    get inflationToggleYes () { return $('[for="include-inflation"]') }
    get inflationToggleNo () { return $('[for="exclude-inflation"]') }
    async setInflationToggle(YesOrNo){
        if(YesOrNo.toLowerCase() == "yes"){
            const el = await this.inflationToggleYes
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
        else{
            const el = await this.inflationToggleNo
            await el.waitForClickable();
            el.moveTo();
            await el.click()
        }
    }

    get expectedInflationRateInput(){ return $('#expected-inflation-rate')}
    async setExpectedInflationRate (expectedInflationRate) {
        const el = await this.inflationToggleNo
        await el.waitForClickable();
        el.moveTo();
        el.setValue(expectedInflationRate);
    }

    get retirementAnnualIncomeRateInput () { return $('#retirement-annual-income') }
    async setRetirementAnnualIncomeRate (retirementAnnualIncomeRate) {await (await this.retirementAnnualIncomeRateInput).setValue(retirementAnnualIncomeRate);}

    get preRetirementROIRateInput () { return $('#pre-retirement-roi') }
    async setPreRetirementROIRate (preRetirementROIRate) {await (await this.preRetirementROIRateInput).setValue(preRetirementROIRate);}

    get postRetirementROIRateInput () { return $('#post-retirement-roi') }
    async setPostRetirementROIRate (postRetirementROIRate) {await (await this.postRetirementROIRateInput).setValue(postRetirementROIRate);}

    get saveChangesBtn(){ return $('[value="Save changes"]'); }
    async clickSaveChangesButton(){ await (await this.saveChangesBtn).click();}

}

module.exports = new DefaultValuesPage();
