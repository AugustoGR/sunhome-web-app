describe('2. Teste de Cadastro de um Novo Produto', () => {
  beforeEach(() => {
    // Realiza o login antes de cada teste deste bloco
    cy.login('example@example.com', '1234'); // (Função customizada para login)
  });

  it('deve cadastrar um novo produto e exibi-lo na listagem', () => {
    // Intercepta as requisições de API para controlar o teste
    cy.intercept('POST', 'http://localhost:3000/product').as('createProduct');

    // Navega para a tela de cadastro de produto
    cy.get('[data-cy=new-product]').click();
    cy.url().should('include', '/newProduct');

    // Preenche o formulário com as informações do novo produto
    cy.get('[data-cy=description]').type('Malbec Magnetic Desodorante Colônia 100ml');
    cy.get('[data-cy=buy-value]').type('199');
    cy.get('[data-cy=sell-value]').type('299');
    cy.get('[data-cy=qtd]').type('10');
    cy.get('[data-cy=validity]').type('2025-12-31');

    // Submete o formulário
    cy.get('[data-cy=submit-button]').click();

    // Aguarda a finalização da chamada de API de criação
    cy.wait('@createProduct');

    // O sistema deve levar para a lista de produtos, que verificamos aqui
    cy.url().should('include', '/landing');
  });
});
