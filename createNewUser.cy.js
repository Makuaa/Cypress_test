
import * as Locators from '../pageobjects/locators.js';
import {faker} from '@faker-js/faker';
const firstname = faker.name.firstName()
const lastname = faker.name.lastName()
const email = faker.internet.email()

describe('Login', () => {
    beforeEach(() => {
        cy.visit(Locators.URL)
        cy.get(Locators.homepageSignInLink).click()
        cy.get(Locators.creatNewAccBtn).click()

    })

    it('verify that new user account cannot be created without firstname', () => {
        cy.get(Locators.lastnameField).type('TesterCyp')
        cy.get(Locators.emailField).type('testerx@gmail.com')
        cy.get(Locators.passwordField).type('Testing123!')
        cy.get(Locators.passwordconfirmationField).type('Testing123!')
        cy.get(Locators.createAccButton).click()
        cy.get(Locators.firstnameError).should('have.text', 'This is a required field.')

    })

    it('verify that new user account cannot be created without lastname', () => {
        cy.get('#firstname').type('Makua')
        //cy.get('#lastname').type('TesterCyp')
        cy.get('#email_address').type('testerx@gmail.com')
        cy.get('#password').type('Testing123!')
        cy.get('#password-confirmation').type('Testing123!')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#lastname-error').should('have.text', 'This is a required field.')

    })

    it('verify that new user account cannot be created without email', () => {
        cy.get('#firstname').type('Makua')
        cy.get('#lastname').type('TesterCyp')
        //cy.get('#email_address').type('testerx@gmail.com')
        cy.get('#password').type('Testing123!')
        cy.get('#password-confirmation').type('Testing123!')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#email_address-error').should('have.text', 'This is a required field.')

    })

    it('verify that user can create new account', () => {
        cy.get('#firstname').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('#email_address').type(email)
        cy.get('#password').type('Testing123!')
        cy.get('#password-confirmation').type('Testing123!')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(5000)
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').should('have.text', 'Thank you for registering with Fake Online Clothing Store.')

    })


})