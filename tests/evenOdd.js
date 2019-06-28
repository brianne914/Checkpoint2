var evenOddObject = {}
module.exports = {
    beforeEach: browser => {
        evenOddObject = browser.page.evenOddObject()
        evenOddObject.navigate()
    },
    'Evens and Odds': browser => {
        evenOddObject
            .click('@eOInput')
            .setValue('@eOInput', '24, 29, 67, 90')
            .click('@split')
            .api.pause(5000)
        evenOddObject
            .assert.containsText('@evenResults', '24,90')
            .assert.containsText('@oddResults', '29,67')
    },
    'Filter Object': browser => {
        evenOddObject
            .click('@fOInput')
            .setValue('@fOInput', 'hairColor')
            .click('@objectFilter')
            .api.pause(5000)
        evenOddObject
            .expect.element('@objectResult').text.to.contain('name')
    },
    'Filter String': browser => {
        evenOddObject
            .click('@fSInput')
            .setValue('@fSInput', 'Jessica')
            .click('@stringFilter')
            .api.pause(5000)
        evenOddObject
            .assert.containsText('@stringResult', 'Jessica')
    },
    'Palindrome': browser => {
        evenOddObject
            .click('@palindromeInput')
            .setValue('@palindromeInput', '100')
            .click('@check')
            .api.pause(3000)
        evenOddObject
            .assert.containsText('@palindromeResult', 'false')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', '989')
            .click('@check')
            .api.pause(3000)
        evenOddObject
            .assert.containsText('@palindromeResult', 'true')
    },
    'Sum': browser => {
        evenOddObject
            .setValue('@firstSumInput', '100')
            .setValue('@secondSumInput', '200')
            .click('@add')
            .api.pause(3000)
        evenOddObject
            .assert.containsText('@sumResult', '300')

    }

}