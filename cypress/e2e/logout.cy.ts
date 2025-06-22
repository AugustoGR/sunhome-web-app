describe('6. Teste do logout', () => {
  beforeEach(() => {
    // Realiza o login antes de cada teste deste bloco
    cy.login('example@example.com', '1234');
  });

  it('deve deslogar o usuário com sucesso', () => {
    cy.get('button[data-cy="sidenav-button"]').click();

    cy.get('a[data-cy="logout"]').click();

    cy.contains('BEM VINDA!').should('be.visible');
  });
});
