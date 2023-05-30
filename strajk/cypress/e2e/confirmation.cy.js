describe('Confirmation spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });

    
      it('should add a booking and go to confirmationpage when clicked and get bookingnumber', () => {
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
        
        const size = 38;
        const secondSize = 41;
        cy.wait(1000)
  
        cy.get('.shoes__button').click()
        cy.get('.shoes__input').type(size)
        cy.get('.shoes__input').should('have.value', 38)
  
        cy.get('.shoes__button').last().click()
        cy.get('.shoes__input').last().type(secondSize)
        cy.get('.shoes__input').last().should('have.value', 41)
  
        cy.get('.booking__button').click()
        cy.get('.input__label').eq(3).should('have.text', 'Booking number')
        cy.get('.confirmation__input').should('not.have.value', '' )
        cy.get('.confirmation__input').invoke('val').should('have.length.greaterThan', 1 )
      })
      
      it('should add a booking and show total sum', () => {
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
        
        const size = 38;
        const secondSize = 41;
        cy.wait(1000)
  
        cy.get('.shoes__button').click()
        cy.get('.shoes__input').type(size)
        cy.get('.shoes__input').should('have.value', 38)
  
        cy.get('.shoes__button').last().click()
        cy.get('.shoes__input').last().type(secondSize)
        cy.get('.shoes__input').last().should('have.value', 41)
  
        cy.get('.booking__button').click()
        cy.wait(1000)
        cy.get('.confirmation__price > p').last().should('contain', '340')
    })

})