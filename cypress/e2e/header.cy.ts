describe('7. Teste do header', () => {
  beforeEach(() => {
    // Realiza o login antes de cada teste deste bloco
    cy.login('example@example.com', '1234');
  });

  it('deve acessar o menu lateral e as páginas', () => {
    // acessa a página de cadastro de novo produto
    cy.get('button[data-cy="sidenav-button"]').click();
    cy.get('a[data-cy="menu-new-product"]').click();
    cy.url().should('include', '/newProduct');

    // acessa a página de venda
    cy.get('button[data-cy="sidenav-button"]').click();
    cy.get('a[data-cy="menu-sell"]').click();
    cy.url().should('include', '/sell');

    // acessa a página de faturamento
    cy.get('button[data-cy="sidenav-button"]').click();
    cy.get('a[data-cy="menu-revenue"]').click();
    cy.url().should('include', '/revenue');

    // acessa a página de produtos
    cy.get('button[data-cy="sidenav-button"]').click();
    cy.get('a[data-cy="menu-product"]').click();
    cy.url().should('include', '/product');

    // acessa a página home
    cy.get('button[data-cy="sidenav-button"]').click();
    cy.get('a[data-cy="menu-home"]').click();
    cy.url().should('include', '/landing');
  });
});
