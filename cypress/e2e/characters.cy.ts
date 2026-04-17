describe('User views available characters on home page', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/characters?page=1&limit=10', {
      fixture: 'characters.json'
    }).as('getCharacters');

    cy.visit('/');
    cy.wait('@getCharacters');
  });

  it('should display characters and allow navigation', () => {

    // THEN: list should be displayed
    cy.get('[data-testid=character-card]')
      .should('exist');

    // THEN: list should not be empty
    cy.get('[data-testid=character-card]')
      .its('length')
      .should('be.greaterThan', 0);

    // THEN: each character has name and image
    cy.get('[data-testid=character-card]').each(($card) => {
      cy.wrap($card).find('img').should('be.visible');
      cy.wrap($card).find('h3').should('not.be.empty');
    });
  });
});
