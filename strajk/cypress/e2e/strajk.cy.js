describe('Booking spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

    it('should display input', () => {
      cy.get('.booking-info__details').should('be.visible')
    })

    it('should be able to type in input', () => {
      const date = '2023-05-30';
      const time = '18:00'
      const bowlers = 2;
      const lanes = 1;
      cy.wait(1000)

      cy.get('.booking-info__date').type(date)
      cy.get('.booking-info__date').should('have.value', '2023-05-30')
      cy.get('[name="time"]').type(time)
      cy.get('[name="time"]').should('have.value', '18:00')
      cy.get('.booking-info__who').type(bowlers)
      cy.get('.booking-info__who').should('have.value', 2)
      cy.get('.booking-info__lanes').type(lanes)
      cy.get('.booking-info__lanes').should('have.value', 1)
      
    })
  
    
  })

  
