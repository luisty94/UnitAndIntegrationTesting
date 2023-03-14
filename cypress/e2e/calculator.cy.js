describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to do add calculations', () => {
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to chain multiple operations', () => {
    cy.get('#number6').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  })

  it('should be able to display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('should be able to display decimals', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('should display infinity for large numbers', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity')
  })
  it('should have working divide by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })

})