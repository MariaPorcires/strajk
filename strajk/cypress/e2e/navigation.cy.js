describe('Navigation spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });

    it('should be able to click navigationbutton to see choices', () => {
        cy.get('.navigation__icon').click()
        cy.get('.navigation__link').should('be.visible')
    })

    it('should be able to go to confirmationpage without booking', () => {
        cy.get('.navigation__icon').click()
        cy.get('.navigation__link').last().click()
        cy.get('.top__title').should('have.text', 'See you soon!')
    })

})