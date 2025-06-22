describe('4. Teste de Verificação do Faturamento e Histórico', () => {
  beforeEach(() => {
    cy.login('example@example.com', '1234');
    cy.newSale();
    cy.intercept('GET', 'http://localhost:3000/sales').as('getFaturamento');
  });

  it('deve exibir o faturamento e o histórico de vendas corretamente', () => {
    // Acessa a seção de faturamento
    cy.get('[data-cy=revenue]').click();
    cy.url().should('include', '/revenue');

    // Aguarda a resposta da API
    cy.wait('@getFaturamento');

    // Verifica se o resumo mensal é exibido com os dados do mock
    cy.get('[data-cy=profit]').should('be.visible');
    cy.get('[data-cy=revenue]').should('be.visible');

    // Verifica se o histórico de vendas contém a venda esperada
    cy.get('[data-cy=history-table]')
      .should('contain', 'Venda de teste para cliente X')
      .and('contain', 'R$ 299.00');
  });
});
