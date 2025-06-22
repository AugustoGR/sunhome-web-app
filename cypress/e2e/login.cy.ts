describe('1. Teste de Login e Acesso à Página Principal', () => {
  it('deve permitir que um usuário faça login e veja a tela Home', () => {
    // Visita a página raiz da aplicação, que deve ser a tela de login
    cy.visit('http://localhost:4200');

    // Intercepta a chamada de API para login para garantir que a requisição foi feita
    cy.intercept('POST', 'http://localhost:3000/auth').as('loginRequest');

    // Preenche os campos de usuário e senha
    cy.get('[data-cy=user]').type('example@example.com');
    cy.get('[data-cy=password]').type('1234');

    // Clica no botão para submeter o formulário de login
    cy.get('button[type=submit]').click();

    // Aguarda a resposta da requisição de login
    cy.wait('@loginRequest');

    // Verifica se a URL mudou para a rota da página principal
    cy.url().should('include', '/landing');

    // Verifica se os elementos-chave da Home estão visíveis
    cy.contains('Lucros do mês').should('be.visible');
    cy.contains('REGISTRAR VENDA').should('be.visible');
    cy.contains('CADASTRAR PRODUTO').should('be.visible');
    cy.contains('Produtos próximos da validade').should('be.visible');
  });
});
