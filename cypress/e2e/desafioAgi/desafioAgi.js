import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Busca com algum nome especifico

Given('que eu esteja no site Agi', () => {
	cy.visit('https://blogdoagi.com.br');
});

When('clicar na lupa para pesquisar', () => {
	cy.get('#overlay-open').click();
});

When('digitar algum conteudo', () => {
	cy.get('.mobile-search > .search-form > label > .search-field').type('diversidade{enter}');
});

Then('devo ver a lista da busca relacionada', () => {
	cy.get('.archive-title').contains('diversidade').should('be.visible');
    cy.get('#post-3388 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a').contains('diversidade').should('be.visible');
});

// Campo de busca vazio

When('digitar algo que nao exista', () => {
    cy.get('.mobile-search > .search-form > label > .search-field').type('jjjjj{enter}');
});

Then('vejo o resultado da busca sem resultados', () => {
	cy.get('.entry-title').contains('Nenhum resultado').should('be.visible');
});
