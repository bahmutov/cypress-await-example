/// <reference types="cypress" />

it('checks the total', () => {
  cy.visit('index.html')
  const subtotal = cy.get('#subtotal').invoke('text').then(parseFloat)
  const tax = cy.get('#tax').invoke('text').then(parseFloat)
  const tip = cy.get('#tip').invoke('text').then(parseFloat)
  const total = cy.get('#total').invoke('text').then(parseFloat)
  expect(total, 'total').to.be.closeTo(subtotal + tax + tip, 0.01)
})
