describe('editor renders correctly', () => {
  beforeEach(() => {
    cy.visit('/editor')
  })

  it('default editor value', () => {
    localStorage.clear()
    cy.get('[data-cy="markdown-editor"]').contains('# Hello World!')
    cy.get('[data-cy="html-view"]').contains('h1', 'Hello World!')
  })

  describe.only('navbar works', () => {

    it('home button redirects correctly', () => {
      cy.get('nav div a').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })

    it.only('menu is displayed', () => {
      cy.get('nav ul').should('not.be.visible')
      cy.get('nav button').click()
      cy.get('nav ul').should('be.visible')
    })

    it('copy code correctly', () => {
      cy.get('nav button').click()
      cy.get('nav ul').contains('Copy Markdown').click()
      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq('# Hello World!')
        })
      })
      cy.get('nav ul').contains('Copy HTML').click()
      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          const value = text.replace(/[\r\n]*/g, "")
          expect(value).to.eq('<h1 id="hello-world">Hello World!</h1>')
        })
      })
    })
  })
})