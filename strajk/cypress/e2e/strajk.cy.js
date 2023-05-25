describe('Booking spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

    it('should display input', () => {
      cy.get('.booking-info__details').should('be.visible')
    })

    it('should display amount', () => {
      const amount = 2;
      cy.wait(1000)

      cy.get('.booking-info__who').type(amount)
      cy.get('.booking-info__who').should('have.value', 2)
      
    })
  
    
  })

  //have value
