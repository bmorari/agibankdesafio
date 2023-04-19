Feature: Desafio Agi

    Scenario: Busca por algum nome específico
        Given que eu esteja no site Agi
        When clicar na lupa para pesquisar
        And digitar algum conteudo
        Then devo ver a lista da busca relacionada

    Scenario: Busca de algo que nao existe
        Given que eu esteja no site Agi
        When clicar na lupa para pesquisar
        And digitar algo que nao exista
        Then vejo o resultado da busca sem resultados