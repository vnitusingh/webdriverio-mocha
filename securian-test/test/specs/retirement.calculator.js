const RetirementCalculatorPage = require('../pageobjects/retirement.calculator.page');
const DefaultValuesPage = require('../pageobjects/default.values.page');


describe('securian retirement user', () => {
    
    it('should be able to enter values in all fields and verify calculated result', async () => {
        RetirementCalculatorPage.open();
        browser.maximizeWindow();
        expect(browser).toHaveTitle(
            'How Much to Save for Retirement | Securian Financial'
        );
        await RetirementCalculatorPage.setCurrentAge("20");
        await RetirementCalculatorPage.setRetirementAge("65");
        await RetirementCalculatorPage.setCurrentAnnualIncome("100000");
        await RetirementCalculatorPage.setSpouseAnnualIncome("100000");
        await RetirementCalculatorPage.setRetirementSavingsBalance('50000');
        await RetirementCalculatorPage.setCurrentSavingsRate("10");
        await RetirementCalculatorPage.setsavingsIncreaseRate("1");
        await RetirementCalculatorPage.clickCalculateButton();
        await expect(RetirementCalculatorPage.retirementAmountResults).toHaveTextContaining(
            '$8,259,874.70');
    });
    

    it('should be able to enter values in all fields including social security fields and verify calculated result', async () => {
        RetirementCalculatorPage.open();
        browser.maximizeWindow();
        expect(browser).toHaveTitle(
            'How Much to Save for Retirement | Securian Financial'
        );
        await RetirementCalculatorPage.setCurrentAge("20");
        await RetirementCalculatorPage.setRetirementAge("65");
        await RetirementCalculatorPage.setCurrentAnnualIncome("100000");
        await RetirementCalculatorPage.setSpouseAnnualIncome("100000");
        await RetirementCalculatorPage.setRetirementSavingsBalance('50000');
        await RetirementCalculatorPage.setCurrentSavingsRate("10");
        await RetirementCalculatorPage.setsavingsIncreaseRate("1");
        
        await RetirementCalculatorPage.setSocialSecurityIncomeToggle("yes");
        await RetirementCalculatorPage.setMaritalStatusToggle("married");
        await RetirementCalculatorPage.setSSOverrideAmount("4000")
        await RetirementCalculatorPage.clickCalculateButton();
        await expect(RetirementCalculatorPage.retirementAmountResults).toHaveTextContaining(
            '$5,616,714.80');
    });

    
    it('should be able to enter change default calculator values  and verify calculated result', async () => {
        RetirementCalculatorPage.open();
        
        var parentWindow  = browser.getWindowHandle();
        
        browser.maximizeWindow();
        expect(browser).toHaveTitle(
            'How Much to Save for Retirement | Securian Financial'
        );
        await RetirementCalculatorPage.setCurrentAge("20");
        await RetirementCalculatorPage.setRetirementAge("65");
        await RetirementCalculatorPage.setCurrentAnnualIncome("100000");
        await RetirementCalculatorPage.setSpouseAnnualIncome("100000");
        await RetirementCalculatorPage.setRetirementSavingsBalance('50000');
        await RetirementCalculatorPage.setCurrentSavingsRate("10");
        await RetirementCalculatorPage.setsavingsIncreaseRate("1");
        await RetirementCalculatorPage.clickAdjustDefaultValuesLink();
        
        await DefaultValuesPage.setAdditionalIncome("10000");
        await DefaultValuesPage.setRetirementDuration("30");
        await DefaultValuesPage.setRetirementAnnualIncomeRate("80");
        await DefaultValuesPage.setPreRetirementROIRate("10");
        await DefaultValuesPage.setPostRetirementROIRate("10");
        await DefaultValuesPage.setInflationToggle("yes");
        await DefaultValuesPage.setExpectedInflationRate("3");
        await DefaultValuesPage.clickSaveChangesButton();
        browser.switchWindow(parentWindow);
        
        await RetirementCalculatorPage.clickCalculateButton();
        await expect(RetirementCalculatorPage.retirementAmountResults).toHaveTextContaining(
            '$7,318,305.88');
    });
    
});