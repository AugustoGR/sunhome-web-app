describe('3. Teste da listagem de Produtos', () => {
  beforeEach(() => {
    // Realiza o login antes de cada teste deste bloco
    cy.login('example@example.com', '1234'); // (Função customizada para login)
  });

  it('deve exibir a lista de produtos', () => {
    cy.intercept('POST', 'http://localhost:3000/product').as('createProduct');

    // Navega para a tela de listagem de produtos
    cy.get('[data-cy=product]').click();

    // Verifica se o container da lista de produtos está visível
    cy.get('[data-cy="product-list"]').should('be.visible');

    // Verifica se pelo menos um produto está sendo exibido
    cy.get('[data-cy="product-item"]').should('have.length.greaterThan', 0);
  });
});
