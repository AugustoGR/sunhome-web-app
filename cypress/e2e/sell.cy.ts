describe('5. Teste de Registro de uma Venda', () => {
  beforeEach(() => {
    cy.login('example@example.com', '1234'); // Realiza o login antes de cada teste deste bloco
  });

  it('deve permitir registrar uma venda e calcular o total corretamente', () => {
    // Intercepta a API que finaliza a venda
    cy.intercept('POST', 'http://localhost:3000/sales').as('executeSale');

    // Navega para a tela de registro de venda
    cy.get('[data-cy=sell]').click();

    // Preenche a descrição da venda
    cy.get('[data-cy=customer]').type('Venda de teste para cliente X');

    // Adiciona um produto à venda
    cy.get('[data-cy=product]').first().click();

    // Verifica se o valor total da venda é calculado e exibido
    cy.get('[data-cy=total-value]').should('have.value', 'R$ 299.00');

    // Finaliza a venda
    cy.contains('button', 'Executar').click();
    cy.wait('@executeSale').its('response.statusCode').should('eq', 201);

    // Verifica se uma mensagem de sucesso é exibida (opcional, mas boa prática)
    cy.contains('Venda Realizada').should('be.visible');
  });
});
