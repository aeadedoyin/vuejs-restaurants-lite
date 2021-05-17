// https://docs.cypress.io/api/introduction/api.html

describe('HomePage', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Company Inc. Restaurant')
    cy.visit('/meals')
    cy.visit('/restaurants')
    cy.get('input').type('doesnt exist').clear()
    cy.get('input').type('store 12').clear()
  })
})
