/// <reference types="cypress" />

const { request } = require("http");

describe('Check frontend on port 3000', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
      })

    it('page exists', () => {
      cy.get('[data-cy=main]').should('exist')
    })

    it('has an H1 title', () => {
      cy.get('[data-cy=h3-title]').contains("Rick and Morty Characters!")
    })
});

describe('Check pagination', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
      })

    it('exists', () => {
      cy.get('[aria-label="Previous page"]').should('exist')
      cy.get('[aria-label="Page 1 is your current page"]').should('exist')
      cy.get('[aria-label="Next page"]').should('exist')
    })

    it('can navigate to next page', () => {
      cy.get('[aria-label="Next page"]').click()
      cy.get('[aria-label="Page 2 is your current page"]')
    })

    it('can navigate to prev page', () => {
        cy.get('[aria-label="Next page"]').click()
        cy.get('[aria-label="Page 2 is your current page"]')
        cy.get('[aria-label="Previous page"]').click()
        cy.get('[aria-label="Page 1 is your current page"]')
      })

    it('navigates through to page 42', () => {
      for (let n = 0; n < 42; n++ ) {
        cy.get('[aria-label="Next page"]').click()
      }
      cy.get('[aria-label="Page 42 is your current page"]')
    })
});

describe('check character cards are created', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
      })
    
    it('looks for card 1', () => {
        cy.wait(1000)
        cy.get('[data-cy=card-1]').should('exist')
    })

    it('counts page 1 has 20 cards', () => {
        cy.wait(1000)
        for (let n = 1; n < 21; n++){
            cy.get(`[data-cy=card-${n}]`).should('exist')
        }
    })

});

describe('checks Rick and Morty api is working', () => {
  it('returns 200', () => {
    cy.request('https://rickandmortyapi.com/api/character')
        .should((response) => {
        expect(response.status).to.eq(200)
     })
  })
});

// check pages and navication
describe('checks character pages', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('Character 1 page is accessible', () => {
        cy.get('[data-cy=card-1]').click()
        cy.url().should('eq', 'http://localhost:3000/characterPage/1')
    })

    it('Character 1 page containts information', () => {
        cy.get('[data-cy=card-1]').click()
        cy.url().should('eq', 'http://localhost:3000/characterPage/1')

        cy.get('[data-cy=characterpage-h1]').should('exist')
        cy.get('[data-cy=char-image]').should('exist')
        cy.get('[data-cy=char-stats]').should('exist')
        cy.get('[data-cy=home]').should('exist')
    })

    it('checks page 1 navigation', () => {
        cy.get('[data-cy=card-1]').click()
        cy.get('[data-cy=home]').should('exist')
        cy.url().should('eq', 'http://localhost:3000/characterPage/1')

        cy.get('[data-cy=home]').should('exist')
        cy.get('[data-cy=home]').click()
        cy.wait(1000)
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('checks page 2, card 1 page navigation', () => {
      cy.get('[aria-label="Next page"]').click()
      cy.get('[data-cy=card-22]').click()
      cy.get('[data-cy=home]').should('exist')
      cy.get('[data-cy=home]').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
})
