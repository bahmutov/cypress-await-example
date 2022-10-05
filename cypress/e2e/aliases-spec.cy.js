/// <reference types="cypress" />

it('checks the total', () => {
  cy.visit('index.html')
  cy.get('#subtotal').invoke('text').then(parseFloat).as('subtotal')
  cy.get('#tax').invoke('text').then(parseFloat).as('tax')
  cy.get('#tip').invoke('text').then(parseFloat).as('tip')
  cy.get('#total')
    .invoke('text')
    .then(parseFloat)
    .as('total')
    // we need to use the "function () {...}" callback
    // to have the "this" object point at the text context
    // where each set alias is a property
    // for example: .as('tax') can be accessed via "this.tax"
    .then(function () {
      expect(this.total, 'total').to.be.closeTo(
        this.subtotal + this.tax + this.tip,
        0.01,
      )
    })
})
