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

    it('should be able to add shoes', () => {
      const size = 38;
      const secondSize = 41;
      cy.wait(1000)

      cy.get('.shoes__button').click()
      cy.get('.shoes__input').type(size)
      cy.get('.shoes__input').should('have.value', 38)

      cy.get('.shoes__button').last().click()
      cy.get('.shoes__input').last().type(secondSize)
      cy.get('.shoes__input').last().should('have.value', 41)

    })

    it('should be able to remove shoes', () => {
      const size = 38;
      const secondSize = 41;
      cy.wait(1000)

      cy.get('.shoes__button').click()
      cy.get('.shoes__input').type(size)
      cy.get('.shoes__input').should('have.value', 38)

      cy.get('.shoes__button').last().click()
      cy.get('.shoes__input').last().type(secondSize)
      cy.get('.shoes__input').last().should('have.value', 41)

      cy.get('.shoes__button--small').last().click()
      cy.get('.shoes__input').should('have.length', 1)
      
    })

    it('should not be able to type letters instead of numbers in input', () => {
        const date = '2023-05-30';
        const time = '18:00'
        const bowlers = 'ooops';
        const lanes = 1;
        cy.wait(1000)
  
        cy.get('.booking-info__date').type(date)
        cy.get('.booking-info__date').should('have.value', '2023-05-30')
        cy.get('[name="time"]').type(time)
        cy.get('[name="time"]').should('have.value', '18:00')
        cy.get('.booking-info__who').type(bowlers)
        cy.get('.booking-info__who').should('have.value', '')
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
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should not add a booking without typing in date', () => {

        const time = '18:00'
        const bowlers = 2;
        const lanes = 1;
        cy.wait(1000)
  
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
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should not add a booking without typing in time', () => {

        const date = '2023-05-30';
        const bowlers = 2;
        const lanes = 1;
        cy.wait(1000)
  
        cy.get('.booking-info__date').type(date)
        cy.get('.booking-info__date').should('have.value', '2023-05-30')
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
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should not add a booking without typing in number of players', () => {
        const date = '2023-05-30';
        const time = '18:00'
        const lanes = 1;
        cy.wait(1000)
  
        cy.get('.booking-info__date').type(date)
        cy.get('.booking-info__date').should('have.value', '2023-05-30')
        cy.get('[name="time"]').type(time)
        cy.get('[name="time"]').should('have.value', '18:00')
        cy.get('.booking-info__lanes').type(lanes)
        cy.get('.booking-info__lanes').should('have.value', 1)
        
        cy.get('.booking__button').click()
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should not add a booking without typing in number of lanes', () => {
        const date = '2023-05-30';
        const time = '18:00'
        const bowlers = 2;
        cy.wait(1000)
  
        cy.get('.booking-info__date').type(date)
        cy.get('.booking-info__date').should('have.value', '2023-05-30')
        cy.get('[name="time"]').type(time)
        cy.get('[name="time"]').should('have.value', '18:00')
        cy.get('.booking-info__who').type(bowlers)
        cy.get('.booking-info__who').should('have.value', 2)
        
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
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should show errormessage when typing -1 instead of 1 in nr of players', () => {
        const date = '2023-05-30';
        const time = '18:00'
        const bowlers = -1;
        const lanes = 1;
        cy.wait(1000)
  
        cy.get('.booking-info__date').type(date)
        cy.get('.booking-info__date').should('have.value', '2023-05-30')
        cy.get('[name="time"]').type(time)
        cy.get('[name="time"]').should('have.value', '18:00')
        cy.get('.booking-info__who').type(bowlers)
        cy.get('.booking-info__who').should('have.value', '-1')
        cy.get('.booking-info__lanes').type(lanes)
        cy.get('.booking-info__lanes').should('have.value', 1)
        
        const size = 38;
        cy.wait(1000)
  
        cy.get('.shoes__button').click()
        cy.get('.shoes__input').type(size)
        cy.get('.shoes__input').should('have.value', 38)
  
        cy.get('.booking__button').click()
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

    it('should not add a booking without matching nr of shoes with nr of players', () => {
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
        cy.wait(1000)
  
        cy.get('.shoes__button').click()
        cy.get('.shoes__input').type(size)
        cy.get('.shoes__input').should('have.value', 38)

        cy.get('.booking__button').click()
        cy.get('.error-message').should('contain', 'Fill out all the fields')
    })

  })

  
