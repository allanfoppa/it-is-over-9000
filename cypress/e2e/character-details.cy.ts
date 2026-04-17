describe('Character details page', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/characters/10', {
      fixture: 'character.json'
    }).as('getCharacter');

    cy.visit('/character/10');
    cy.wait('@getCharacter');
  });

  it('should display character details', () => {
    cy.get('[data-testid="character-detail"]').as('characterDetail');

    cy.get('@characterDetail').should('exist');

    cy.get('@characterDetail').within(() => {
      cy.get('img').should('be.visible');
      cy.get('h2').should('not.be.empty');
    });
  });

});
